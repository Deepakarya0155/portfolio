import { Component } from '@angular/core';
import { trigger, transition, animate,style, keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger("fadein",[
      
      transition(":enter",[
        animate('.5s',keyframes([
          style({
            transform:'translateX(4px)'
          }),
          style({
            transform:'translateX(-4px)'
          }),
          style({
            transform:'translateX(4px)'
          }),
          style({
            transform:'translateX(-4px)'
          }),
          style({
            transform:'translateX(4px)'
          }),
          style({
            transform:'translateX(-4px)'
          }),
        ]))
      ])
    ])
  ]

  

})
export class AppComponent {
  title = 'FrontEnd';
}
