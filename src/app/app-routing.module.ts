import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HOMEComponent } from './home/home.component'
import { ResumeComponent } from './resume/resume.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { loginGuard } from './servics/authGard';
import { FeedbacksComponent } from './admin/feedbacks/feedbacks.component';

const routes: Routes = [
  {path:"",component:HOMEComponent},
  {path:"resume",component:ResumeComponent},
  {path:'aboutme',component:AboutmeComponent},
  {path:"contactme",component:ContactmeComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdminComponent,canActivate:[loginGuard],
    children:[
        {path:"feedback",component:FeedbacksComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export var compont=[HOMEComponent,ResumeComponent,
  AboutmeComponent,ContactmeComponent,PortfolioComponent,
  LoginComponent,AdminComponent,FeedbacksComponent]
