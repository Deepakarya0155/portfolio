import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HOMEComponent } from './home/home.component'
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  {path:"",component:HOMEComponent},
  {path:"resume",component:ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export var compont=[HOMEComponent,ResumeComponent]
