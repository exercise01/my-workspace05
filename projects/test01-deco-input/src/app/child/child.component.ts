import { Component, Input, ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() count: number = 0;  

  ngOnChanges() {  
     
    // 入力プロパティ変更時にログ出力
    //@Input: 入力値の変化をリアクティブに処理するには、
    // ngOnChanges などのライフサイクルフックを使う必要があり、少し複雑でした
    console.log('Decorator: ', this.count);        
 }

}
