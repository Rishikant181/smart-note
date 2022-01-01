import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStoreService } from '../../data-store.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    // The constructor
    constructor(
        private dataStoreService: DataStoreService,
        private router: Router
    ) {}
    
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log("CanActivate called");
        // Checking is user is logged in
        // If logged in, then allowing
        if(this.dataStoreService.userLoggedIn) {
            console.log("Logged in");
            return true;
        }
        // Else redirecting to account creation
        else {
            console.log("Not logged in!");
            return this.router.parseUrl('accounts/create');
        }
    }  
}
