import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child4',
  standalone: true,
  imports: [],
  templateUrl: './child4.component.html',
  styleUrl: './child4.component.scss'
})
export class Child4Component {
  value = input<string>('');

  valueChange = output<string>();
  //@Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
   const inputValue = (event.target as HTMLInputElement).value;
   this.valueChange.emit(inputValue);
 }
}
