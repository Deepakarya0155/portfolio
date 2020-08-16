import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Backend } from '../servics/Backend';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(public backend:Backend) {
    
   }

  ngOnInit(): void {
    
  }

}
