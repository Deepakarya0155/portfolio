import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavBar} from './navbar/navbar';
import {MaterialModuleModule} from './material-module/material-module.module';
import { HOMEComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,NavBar, HOMEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
