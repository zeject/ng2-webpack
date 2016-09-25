import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'home-detail',
    template: `
        <button (click)="goHome()">go home</button>
    `
})
export class HomeDetailComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {

    }

    goHome() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

}