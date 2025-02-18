import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() buttonText: string = '';

  //public firstName = input<string>("Yamada");   
  public firstName = input.required<string>();             // Signal<string|undefined>
}
