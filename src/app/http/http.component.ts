import { Component, OnInit } from '@angular/core';
import { HttpService, Obj } from './http.service';

@Component({
    moduleId: module.id,
    selector: 'http',
    template: `
        <h2>HTTP</h2>
        <p *ngFor="let d of data">{{d.name}}</p>
    `,
    providers: [
        HttpService
    ]
})
export class HttpTestComponent implements OnInit {
    private data: Obj[];
    private errorMessage: string;

    constructor(private httpService: HttpService) { }
    
    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.httpService.getData()
            .then(
            data => this.data = data,
            error => this.errorMessage = <any>error);
    }
}