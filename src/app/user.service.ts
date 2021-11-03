import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor() { }

    // Method to handle login of user
    verifyLoginCredentials(email: String, pass: String): boolean {
        return true;
    }
}
