import { Component ,HostListener} from '@angular/core';
import { trigger, transition, animate,style, keyframes } from '@angular/animations';
import { browser } from 'protractor';
import {slideUp,shakeLeftRight} from './animations/animations'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideUp,shakeLeftRight
  ]
})
export class AppComponent {
 

  title = 'FrontEnd';
  
}
