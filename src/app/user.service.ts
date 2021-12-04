import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Response } from './models/general.models';
import {
    UserSignupCredential,
    UserCreds
} from './models/user.models';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private httpClient: HttpClient) { }

    // Method to handle login of user
    verifyLoginCreds(creds: UserCreds): Observable<Response> {
        // Creating query to send user creds in gql format
        const query = `query {
            login(email: "${creds.email}", pass: "${creds.pass}") {
                success
                type
            }
        }`;
        
        // Sending input credentials to backend and getting back response
        return this.httpClient.post<Response>(environment.apiUrl + query, {});
    }

    // Method to validate credentials
    validateCreds(email: string, pass: string): boolean {
        return true;
    }

    // Method to validate creadentials and create an account
    createAccount(creds: UserSignupCredential): Observable<Response> {
        // Creating query to send new credentials in gql format
        const query = `mutation {
            signup(
                firstName: "${creds.firstName}",
                lastName: "${creds.lastName}",
                email: "${creds.email}",
                pass: "${creds.newPass}"
            ) {
                success
                type
            }
        }`;

        // Sending new credentials to backend and getting back response
        return this.httpClient.post<Response>(environment.apiUrl + query, {});
    }
}
