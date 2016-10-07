import { Component, OnInit } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'home',
    styles: [`
        .c {
            color: #aca;
        }
    `],
    template: `
        <div class="c">home Page</div>
        <router-outlet></router-outlet>
    `
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

}