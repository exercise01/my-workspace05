import { Component, signal } from '@angular/core';
import { TooltipConfig, TooltipDirective } from '../child5/tooltip.directive';

@Component({
  selector: 'app-parent5',
  standalone: true,
  imports: [TooltipDirective],
  templateUrl: './parent5.component.html',
  styleUrl: './parent5.component.scss'
})
export class Parent5Component {
  tooltipConfig = signal<TooltipConfig>({ text: '初期テキスト', position: 'top' });

  changeTooltipPosition() {
   this.tooltipConfig.update(config => ({ ...config, position: 'bottom' }));
  }
}
