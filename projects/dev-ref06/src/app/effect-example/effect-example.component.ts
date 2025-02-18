
import { Component, input, effect, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-effect-example',
  imports: [],
  templateUrl: './effect-example.component.html',
  styleUrl: './effect-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EffectExampleComponent {
  value = input(0);

  constructor() {
    // effect を使って、value シグナルの変化を監視し、ログ出力
    effect(() => {
      console.log('Value changed to:', this.value());
    });
  }
}
