import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule,compont } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavBar} from './navbar/navbar';
import {MaterialModuleModule} from './material-module/material-module.module';
import {HttpClientModule} from '@angular/common/http'
import { Backend } from './servics/Backend';





@NgModule({
  declarations: [
    AppComponent,NavBar, compont
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    HttpClientModule
  ],
  providers: [Backend],
  bootstrap: [AppComponent]
})
export class AppModule { }
