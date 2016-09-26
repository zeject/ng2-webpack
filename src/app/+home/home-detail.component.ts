import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'home-detail',
    template: `
        <button (click)="goHome()">go home</button>
        {{id}}
    `
})
export class HomeDetailComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router) { }
    private id: number;
    private isExist : boolean;
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.id = id;
        });
        this.route.data.forEach((data: { isExist: boolean }) => {
            this.isExist = data.isExist;
        });
    }

    goHome() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

}