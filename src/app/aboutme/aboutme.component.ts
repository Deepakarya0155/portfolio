import { Component, OnInit } from '@angular/core';
import { Backend } from '../servics/Backend';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(public backend:Backend) { }

  ngOnInit(): void {
  }

}
