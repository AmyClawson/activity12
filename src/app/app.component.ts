import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

    showHelloWorld:boolean = false;
    currentColor = 0;
    helloColor:string;

    ngOnInit(){
        this.switchColor();
    }

    helloWorld(){
        this.showHelloWorld = !this.showHelloWorld;
    }

    // helloColor(){
    //     let letters = '0123456789ABCDEF';
    //     let color = '#';
    //     for (let i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }


    switchColor() {
        let colors = ["red", "green", "blue", "purple", "yellow", "orange"];
        if (this.currentColor >= colors.length){
            this.currentColor = 0;
        }
        this.helloColor = colors[this.currentColor++];
        setTimeout(this.switchColor, 50);
    }

    switchColor();
}
