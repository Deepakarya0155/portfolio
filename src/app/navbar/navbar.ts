import {Component,HostListener} from '@angular/core'
import {Router} from '@angular/router'
import {slideRight,slideLeft,slideDown,slideUp,shakeLeftRight} from '../animations/animations'
import { Backend } from '../servics/Backend';

@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.html',
    styleUrls:['./navbar.css'],
    animations:[
        slideRight,
        slideLeft,
        slideDown,
        slideUp,
        shakeLeftRight
    ]
})
export class NavBar{
    computerscreenFlag=true;
    scrollFlag=false;
    constructor(private route:Router,private backend:Backend){
        if(screen.availWidth<720){
            this.computerscreenFlag=false
            this.backend.computerscreenFlag=false;
        }else{
            this.computerscreenFlag=true
            this.backend.computerscreenFlag=true;
        }
    }

    @HostListener('window:scroll') onscroll(event){
        if(window.scrollY>100){
            this.scrollFlag=true;
        }else{
            this.scrollFlag=false;
        }
    }
    @HostListener('window:resize') onresize(event){
        // console.log(event)
        if(screen.availWidth<720){
            this.computerscreenFlag=false
            this.backend.computerscreenFlag=false;
        }else{
            this.computerscreenFlag=true
            this.backend.computerscreenFlag=true;
        }
    }

    goHome(){
        this.route.navigate([''])
    }
    goResume(){
        this.route.navigate(['resume'])
    }
    goAboutMe(){
        this.route.navigate(['aboutme'])
    }
    gocontactme(){
        this.route.navigate(['contactme'])
    }
    goPortfolio(){
        this.route.navigate(['portfolio'])
    }
}   