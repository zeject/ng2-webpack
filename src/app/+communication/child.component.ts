import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'child',
    template: '<p>{{attrStr}}---{{changeLog}}</p>'
})
export class ChildComponent implements OnInit, OnChanges {
    _attrStr: string = 'no value';

    @Output() onVoted = new EventEmitter<string>();

    vote() {
        this.onVoted.emit(this._attrStr);
    }

    @Input()
    set attrStr(attrStr: string) {
        this._attrStr = (attrStr && attrStr.trim()) || 'no value';
    }

    get attrStr() {
        return this._attrStr;
    }

    changeLog: string = '';

    ngOnChanges(changes) {
        this.changeLog = JSON.stringify(changes['attrStr']);
        this.vote();
    }

    constructor() { }

    ngOnInit() {

    }

}