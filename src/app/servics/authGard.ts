import { CanActivate, Router } from '@angular/router';
import { Backend } from './Backend';
import { Injectable } from '@angular/core';

@Injectable()
export class loginGuard implements CanActivate{

    constructor(private backend:Backend,private route:Router){

    }

    canActivate(){
        // return true;
        if(this.backend.currentuser=="admin"){
            return true;
        }
        else{
            this.route.navigate(['/'])
            return true;
        }
    }

}