import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Backend } from 'src/app/servics/Backend';
import { async } from '@angular/core/testing';

class feedbackInterface{
  Name;
  Comment;
  Phone;
  Email;
  Delete;
}




@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit,OnDestroy {
  feedbackData$;
  temp:feedbackInterface;
  data:feedbackInterface[]=[]
  displayedColumns: string[] = ['Name', 'Comment', 'Phone', 'Email','Delete'];
  dataSource=new MatTableDataSource(this.data);

  subscription;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private backend:Backend) { 
    
    this.subscription=this.backend.getFeedBackLink().snapshotChanges().subscribe((res:any)=>{
      console.log("subscription called")
      this.data=[]
      for(let i of res){
        this.backend.getDbObject().object("/feedback/"+i.key).valueChanges().subscribe((res:any)=>{
          
          this.temp=new feedbackInterface();
          this.temp.Name=res.name;
          this.temp.Comment=res.comment;
          this.temp.Email=res.email;
          this.temp.Phone=res.phone;
          this.temp.Delete=i.key;
          this.data.push(this.temp)
          this.dataSource.filter=""    
        })
      }
      this.dataSource.data=this.data
      
    })
   
  }

  ngOnInit(): void {
    
  }

  delete(element){
    this.backend.getDbObject().object("/feedback/"+element).remove().then(res=>{
      this.backend.openSnackBar(5,"Deleted");
    }).catch(error=>{
      console.log(error)
    })
  }
  ngOnDestroy(){
    if(this.subscription!=undefined){
      this.subscription.unsubscribe();
    }
  }
}
