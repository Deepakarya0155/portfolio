import {trigger,transition,animate,style, keyframes} from '@angular/animations'




export var slideRight=trigger("slideRight",[
    transition(":enter",[
        animate(0,style({transform:'translateX(-1000%)'})),
        animate('1s',style({transform:'translateX(0)'}))
    ])
])

export var slideLeft=trigger("slideLeft",[
    transition(":enter",[
        animate(0,style({transform:'translateX(1000%)'})),
        animate('1s',style({transform:'translateX(0)'}))
    ])
])

export var slideDown=trigger("slideDown",[
    transition(":enter",[
        animate(0,style({transform:'translateY(-100%)'})),
        animate('1s',style({transform:'translateX(0)'}))
    ])
])


export var slideUp=trigger("slideUp",[
    transition(":enter",[
        animate(0,style({transform:'translateY(1000%)'})),
        animate('1s',style({transform:'translateX(0)'}))
    ])
])

export var shakeLeftRight=trigger("shakeLeftRight",[
    transition("void <=> *",[
        animate('1s',keyframes([
            style({transform:'translateX(10px)'}),
            style({transform:'translateX(-10px)'}),
            style({transform:'translateX(10px)'}),
            style({transform:'translateX(-10px)'}),
            style({transform:'translateX(10px)'}),
            style({transform:'translateX(-10px)'}),
            style({transform:'translateX(10px)'}),
            style({transform:'translateX(-10px)'}),
            style({transform:'translateX(10px)'}),
            style({transform:'translateX(-10px)'}),
            style({transform:'translateX(10px)'}),
            style({transform:'translateX(-10px)'}),
            style({transform:'translateX(10px)'}),
            style({transform:'translateX(-10px)'}),
            style({transform:'translateX(10px)'}),
            style({transform:'translateX(-10px)'}),
            style({transform:'translateX(10px)'}),
            style({transform:'translateX(-10px)'}),
            style({transform:'translateX(10px)'}),
            style({transform:'translateX(-10px)'}),
            style({transform:'translateX(10px)'}),
            style({transform:'translateX(-10px)'}),
            style({transform:'translateX(10px)'}),
            style({transform:'translateX(-10px)'})
        ]))
    ])
])