import { Component, OnInit } from '@angular/core';
import { Backend } from '../servics/Backend';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HOMEComponent implements OnInit {

  name="Deepak Arya"

  constructor(public backend:Backend) { }

  ngOnInit(): void {
    
  }

}
