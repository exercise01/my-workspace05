import { Component, signal } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-parent1',
  standalone: true,
  imports: [Child1Component],
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.scss'
})
export class Parent1Component {
  buttonLabel = signal<string>('初期ラベル');

  changeLabel() {
    this.buttonLabel.set('新しいラベル');
    }
}
