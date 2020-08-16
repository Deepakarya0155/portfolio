import {Injectable, HostListener} from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Backend{
    study_data:any[];
    exp_data:any[];
    computerscreenFlag=true;
    constructor(private http:HttpClient){
        this.loadStudyData()
        this.loadExpData();
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

    
}