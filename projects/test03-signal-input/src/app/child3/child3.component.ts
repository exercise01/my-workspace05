import { CommonModule } from '@angular/common';
import { Component, input, effect } from '@angular/core';

@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.scss'
})
export class Child3Component {
 selectedItemId = input<number | null>(null);
 items = [ // 例としてアイテムデータを用意
  { id: 123, name: 'アイテムA' },
  { id: 456, name: 'アイテムB' },
  { id: 789, name: 'アイテムC' },
  ];
 constructor() {
  effect(() => {
  // selectedItemId signal の変更を検知して選択状態を更新
  console.log('Selected item ID changed:', this.selectedItemId());
  // 実際の選択状態更新ロジックはここに実装
  });
 }
}
