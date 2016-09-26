import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Obj {
    name : string;
}

@Injectable()
export class HttpService {
    constructor(private http: Http) { }
    private httpUrl = 'app/json/http-data.json';  // URL to web API
    getData(): Promise<Obj[]> {
        return this.http.get(this.httpUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    addData(name: string): Promise<Obj> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.httpUrl, body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}
