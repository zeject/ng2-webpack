import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    styles: [`
        .active {color: #cac;}
    `],
    template: `
        <a [routerLink]=" ['./home'] " routerLinkActive="active">
          Index
        </a>
        |
        <a [routerLink]=" ['./dashboard'] " routerLinkActive="active">
          dashboard
        </a>
        <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }
    

}