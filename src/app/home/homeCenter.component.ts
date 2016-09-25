import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'homeCenter',
    template: '<button (click)="goDetail(2)">go detail </button>center'
})
export class HomeCenterComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() { 

    }

    goDetail(id) {
        this.router.navigate([id], { relativeTo: this.route });
    }

}