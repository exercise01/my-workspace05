import { Component, signal } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent3',
  imports: [Child3Component],
  templateUrl: './parent3.component.html',
  styleUrl: './parent3.component.scss'
})
export class Parent3Component {
  selectedItemId = signal<number | null>(null);

changeSelectedItem() {
this.selectedItemId.set(456); // 例としてアイテムID 123 を選択
 }
}
