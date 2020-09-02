import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule,compont } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavBar} from './navbar/navbar';
import {MaterialModuleModule} from './material-module/material-module.module';
import {HttpClientModule} from '@angular/common/http'
import { Backend } from './servics/Backend';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import { environment } from 'src/environments/environment';
import { snkComp } from './servics/snkComp';


@NgModule({
  declarations: [
    AppComponent,NavBar, compont,snkComp
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule

    
  ],
  providers: [Backend],
  bootstrap: [AppComponent]
})
export class AppModule { }
