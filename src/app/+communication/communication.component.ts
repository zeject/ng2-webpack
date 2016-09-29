import { Component, OnInit } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'communication',
    template: `
        <div>
            <parent></parent>
        </div>
    `
})
export class CommunicationComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}