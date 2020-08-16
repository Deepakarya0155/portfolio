import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HOMEComponent } from './home/home.component'
import { ResumeComponent } from './resume/resume.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  {path:"",component:HOMEComponent},
  {path:"resume",component:ResumeComponent},
  {path:'aboutme',component:AboutmeComponent},
  {path:"contactme",component:ContactmeComponent},
  {path:"portfolio",component:PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export var compont=[HOMEComponent,ResumeComponent,AboutmeComponent,ContactmeComponent,PortfolioComponent]
