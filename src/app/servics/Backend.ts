import {Injectable, HostListener} from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Backend{
    study_data:any[];
    exp_data:any[];
    aboutme_data:any[];
    portfolio_data:any[];
    contactme:any;
    computerscreenFlag=true;
    constructor(private http:HttpClient){
        this.loadStudyData()
        this.loadExpData();
        this.loadaboutme();
        this.loadcontactme();
        this.loadportfolio();
    }
    loadStudyData(){
        this.http.get('./assets/study.json').subscribe((res:any)=>{
            this.study_data=res
        },error=>console.log(error)) 
    }
    loadExpData(){
        this.http.get('./assets/experience.json').subscribe((res:any)=>{
            this.exp_data=res
        },error=>console.log(error)) 
    }

    loadaboutme(){
        this.http.get('./assets/aboutme.json').subscribe((res:any)=>{
            this.aboutme_data=res
        },error=>console.log(error)) 
    }
    loadcontactme(){
        this.http.get('./assets/contactme.json').subscribe((res:any)=>{
            this.contactme=res
        },error=>console.log(error)) 
    }
    loadportfolio(){
        this.http.get('./assets/portfolio.json').subscribe((res:any)=>{
            this.portfolio_data=res
            
        },error=>console.log(error)) 
    }

}