import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor() { }

    // Method to handle login of user
    verifyLoginCreds(email: string, pass: string): boolean {
        return true;
    }

    // Method to validate credentials
    validateCreds(email: string, pass: string): boolean {
        return true;
    }
}
