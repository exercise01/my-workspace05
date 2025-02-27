import { Component, signal } from '@angular/core';
import { Child4Component } from '../child4/child4.component';

@Component({
  selector: 'app-parent4',
  standalone: true,
  imports: [Child4Component],
  templateUrl: './parent4.component.html',
  styleUrl: './parent4.component.scss'
})
export class Parent4Component {
  name = signal<string>('');
}
