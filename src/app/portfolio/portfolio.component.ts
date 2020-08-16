import { Component, OnInit } from '@angular/core';
import { Backend } from '../servics/Backend';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public backend:Backend,public domm:DomSanitizer) { 
    
  }
  safeurl(url){
    return this.domm.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
    console.log(this.backend.portfolio_data)
  }

}
