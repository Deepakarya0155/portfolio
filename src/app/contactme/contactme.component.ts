import { Component, OnInit, OnDestroy } from '@angular/core';
import { Backend } from '../servics/Backend';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit,OnDestroy {
  subscription:Observable<any>;
  constructor(public backend:Backend) {
    // this.subscription=backend.getFeedBackLink().valueChanges();
  }

  qform=new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required,Validators.pattern("[0-9]{10}")]),
    comment:new FormControl("",[Validators.required])
  })



  ngOnInit(): void {
  }

  submit(qform){
    // console.log(qform)
    this.backend.getFeedBackLink().push(qform).then(res=>{
      alert("success full")
    }).catch(error=>console.log(error))
  }

  ngOnDestroy(){
    // this.subscription.subscribe();
  }
}
