// This service supplies various global data to other services and components

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DataStoreService {
    // Global data
    private _userLoggedIn: boolean;                                          // To store whether user is logged in or not
    private _guestLoggedIn: boolean;                                         // To store whether guest logged in
    private _activeComponent: string;                                        // To store name of active component(excluding modals)
    private _authorizationToken: string;                                     // To store authorization token of currently logged in user

    // The constructor
    constructor() {
        this._userLoggedIn = false;
        this._guestLoggedIn = false;
        this._activeComponent = "Smart Notes";
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

    // For activeComponent
    get activeComponent(): string {
        return this._activeComponent;
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

    // For activeComponent
    set activeComponent(component: string) {
        this._activeComponent = component;
    }

    // For authorization token
    set authorizationToken(token: string) {
        this._authorizationToken = token;
    }
}
