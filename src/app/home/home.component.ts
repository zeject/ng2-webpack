import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    template: `
        home Page<br>
        <router-outlet></router-outlet>
    `
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}