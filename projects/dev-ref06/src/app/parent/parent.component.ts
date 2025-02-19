import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
//Decorator  
  parentCount = 0;

  incrementCount() {
    this.parentCount++;    
  }

 //Signal
  
  parentValue = 0;

  incrementValue() {
    this.parentValue++;
  }
}
