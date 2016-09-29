import { Component, OnInit } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'parent',
    template: `
        <div>
            <p>this is parent</p>
            <child (onVoted)="onVoted($event)" [attrStr]="str"></child>
            <child [attrStr]=""></child>
            <button (click)="changeStr()">change</button>
            <ul>
                <li *ngFor="let s of vs">{{s}}</li>
            </ul>
        </div>
    `
})
export class ParentComponent implements OnInit {
    str: string = 'aaaaa';
    
    vs: string[] = [];

    changeStr() {
        this.str = '' + Math.random();
    }

    onVoted(str: string) {
        this.vs.push(str);
    }

    constructor() { }

    ngOnInit() { }
}