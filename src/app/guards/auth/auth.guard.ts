import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStoreService } from 'src/app/data-store.service';

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
        // Checking is user is logged in
        // If logged in, then allowing
        if(this.dataStoreService.userLoggedIn) {
            return true;
        }
        // Else redirecting to account creation
        else {
            return this.router.parseUrl('accounts/create');
        }
    }  
}
