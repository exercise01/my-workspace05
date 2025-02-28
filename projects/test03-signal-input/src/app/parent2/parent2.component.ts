import { Component,signal } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent2',
  standalone: true,
  imports: [Child2Component],
  templateUrl: './parent2.component.html',
  styleUrl: './parent2.component.scss'
})
export class Parent2Component {
  isLoading = signal<boolean>(false);

  startLoading() {
   this.isLoading.set(true);
   setTimeout(() => {
   this.isLoading.set(false);
    }, 3000); 
  }

  stopLoading() {
   this.isLoading.set(false);
   }
}
