import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseData } from './models/general.models';
import { NewUserCreds } from './models/user.models';

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

    // Method to validate creadentials and create an account
    createAccount(creds: NewUserCreds): ResponseData {
        var status = new ResponseData();

        status.success = true;
        status.message = "Account created successfully";

        return status;
    }
}
