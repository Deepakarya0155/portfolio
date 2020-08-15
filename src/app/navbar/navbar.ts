import {Component,HostListener} from '@angular/core'

@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.html',
    styleUrls:['./navbar.css']
})
export class NavBar{
    computerscreenFlag=true;
    constructor(){
     
    }

    @HostListener('window:scroll') onscroll(event){
        // console.log(event)
        // console.log(document.body.scrollTo(100))
    }
    @HostListener('window:resize') onresize(event){
        // console.log(event)
        if(screen.availWidth<720){
            this.computerscreenFlag=false
        }else{
            this.computerscreenFlag=true
        }
    }
}