// This service supplies various global data to other services and components

import { Injectable } from '@angular/core';

import { LoggerService } from 'src/app/services/logger/logger.service';

@Injectable({
    providedIn: 'root'
})

export class DataStoreService {
    
    // Global data
    private _userLoggedIn: boolean;                                          // To store whether user is logged in or not
    private _guestLoggedIn: boolean;                                         // To store whether guest logged in
    private _authorizationToken: string;                                     // To store authorization token of currently logged in user

    // The constructor
    constructor() {
        this._userLoggedIn = false;
        this._guestLoggedIn = false;
    }

    /* GETTERS */

    // For userLoggedIn
    get userLoggedIn(): boolean {
        return this._userLoggedIn;
    }

    // For guestLoggedIn
    get guestLoggedIn(): boolean {
        return this._guestLoggedIn;
    }

    // For authorization token
    get authorizationToken(): string {
        return this._authorizationToken;
    }

    /* SETTERS */
    
    // For userLoggedIn
    set userLoggedIn(status: boolean) {
        this._userLoggedIn = status;
    }

    // For guestLoggedIn
    set guestLoggedIn(status: boolean) {
        this._guestLoggedIn = status;
    }

    // For authorization token
    set authorizationToken(token: string) {
        this._authorizationToken = token;
    }
}
