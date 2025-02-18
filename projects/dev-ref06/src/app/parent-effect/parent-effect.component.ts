import { Component } from '@angular/core';
import { EffectExampleComponent } from '../effect-example/effect-example.component';

@Component({
  selector: 'app-parent-effect',
  imports: [EffectExampleComponent],
  templateUrl: './parent-effect.component.html',
  styleUrl: './parent-effect.component.scss'
})
export class ParentEffectComponent {
  parentValue = 0;

  incrementValue() {
    this.parentValue++;
  }
}
