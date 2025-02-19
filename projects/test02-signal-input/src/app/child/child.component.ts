import { Component, input, effect, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  value = input<number>(0);

  constructor() {
    effect(() => {
      console.log('Signal:', this.value());
      
    });  
  }


}
