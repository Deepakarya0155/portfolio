import { Component, OnInit } from '@angular/core';
import { Backend } from '../servics/Backend';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  constructor(public backend:Backend) { }

  ngOnInit(): void {
  }

}
