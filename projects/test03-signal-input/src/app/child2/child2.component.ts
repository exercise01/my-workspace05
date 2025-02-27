import { CommonModule } from "@angular/common";
import { Component,input} from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component {
 isLoading = input<boolean>(false);

}
