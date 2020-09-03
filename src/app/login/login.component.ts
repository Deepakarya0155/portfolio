import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Backend } from '../servics/Backend';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,OnDestroy{
  hide=true;
  subscription;

  loginF=new FormGroup({
    uname:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })

  constructor(private backend:Backend,private route:Router) {
    
  }
  
  ngOnInit(): void {
  }
  login(data){
    
    this.subscription=this.backend.getAdminDetail().valueChanges().subscribe((res:any)=>{
      if((<String>data.uname).trim().toLowerCase()==(<String>res.user).trim().toLowerCase()
          && res.password==data.password){
            this.backend.currentuser="admin"
            this.route.navigate(["/admin"]);
          }else{
            this.backend.openSnackBar(5,"Invalid user");
          }
    })    
  }

  ngOnDestroy(){
    if(this.subscription!=undefined){
      this.subscription.unsubscribe()
    }
  }
}
