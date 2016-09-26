import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class HomeDetailResolve implements Resolve<number> {

    constructor(private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Promise<number> | boolean {
        let id = +route.params['id'];
        if (id != 4) {
            return true;
        } else { // id not found
            this.router.navigate(['/dashboard']);
            return false;
        }
    }
}