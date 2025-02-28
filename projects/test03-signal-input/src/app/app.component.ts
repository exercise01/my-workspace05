import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from "./parent2/parent2.component";
import { Parent3Component } from "./parent3/parent3.component";
import { Parent4Component } from "./parent4/parent4.component";
import { Parent5Component } from "./parent5/parent5.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
     Parent1Component,
     Parent2Component, 
     Parent3Component, 
     Parent4Component,
     Parent5Component
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test03-signal-input';
}
