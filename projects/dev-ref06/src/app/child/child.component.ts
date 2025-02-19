import { Component, Input, OnChanges, input, effect, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges{

  @Input() a:number=0;
  b = input<number>(0);  

//signalはジェネリックスをつかい型を厳密に定義できる。
//input.required(): input.required<Type>() とすることで、
// より簡潔かつ明確に必須入力を宣言できます。 
  @Input() count: number = 0;  
//--------------------
//@Input: デフォルト値を指定する場合、
//クラスプロパティの初期値として設定する必要があり、少し冗長でした。
//input(): input<Type>(defaultValue) のように、
// input() 関数の引数として直接デフォルト値を指定できます。
// より簡潔で直感的な記述が可能です。
  value = input<number>(0);

  constructor() {
    this.a = 60;
   //effect を使って、ログ出力
   //input(): 入力値がシグナルとして提供されるため、 computed や effect と組み合わせて、
   // 入力値の変化にリアクティブに反応するロジックを簡単に記述できます。
   // より宣言的で簡潔なコードになります。
    effect(() => {
      console.log('Signal:', this.value());
      
    });   
  }
//-------------------
  ngOnChanges() {  
     
     // 入力プロパティ変更時にログ出力
     //@Input: 入力値の変化をリアクティブに処理するには、
     // ngOnChanges などのライフサイクルフックを使う必要があり、少し複雑でした
     console.log('Decolator: ', this.count);        
  }

}
