import {Injectable, HostListener} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/database'
import {MatSnackBar} from '@angular/material/snack-bar';
import { snkComp } from './snkComp';


@Injectable()
export class Backend{
    currentuser;
    study_data:any[];
    exp_data:any[];
    aboutme_data:any;
    portfolio_data:any[];
    contactme:any;
    computerscreenFlag=true;
    socialmedia:any[]=[];
    constructor(private http:HttpClient,private firedb:AngularFireDatabase,private snk:MatSnackBar){
        this.loadStudyData()
        this.loadExpData();
        // this.loadaboutme();
        // this.loadcontactme();
        this.loadportfolio();
        firedb.object("/contact").valueChanges().subscribe(rs=>{
            this.contactme=rs
        })
        firedb.object("/social").valueChanges().subscribe((rs:any)=>{
            for(let i of rs){
                if(i!=undefined){
                    this.socialmedia.push(i);
                }
            }
        });
        
        firedb.object("/about").valueChanges().subscribe((rs:any)=>{
            this.aboutme_data=rs;
        })
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

    getFeedBackLink(){
       return this.firedb.list("/feedback")
    }
    
    getAdminDetail(){
        return this.firedb.object("/login/1")
    }
    
    openSnackBar(dur,msg) {
        this.snk.openFromComponent(snkComp, {
          duration: dur * 1000,
          data:msg
        });
    }
    getDbObject(){
        return this.firedb;
    }
   
}