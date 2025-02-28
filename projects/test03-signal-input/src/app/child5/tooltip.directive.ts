import { Directive, input, effect, ElementRef } from '@angular/core';

  export interface TooltipConfig {
  text: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  }

  @Directive({
  selector: '[app-tooltip]',
  standalone: true,
  })
  export class TooltipDirective {
   config = input<TooltipConfig>({ text: 'デフォルトテキスト', position: 'top' });

   constructor(private el: ElementRef) {
    effect(() => {
    // config signal の変更を検知してツールチップの表示を更新
    console.log('Tooltip config changed:', this.config());
    // 実際のツールチップ表示ロジックはここに実装
    });
   }
  }
