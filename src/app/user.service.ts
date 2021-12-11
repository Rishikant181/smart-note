import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Response } from './models/general.models';
import {
    NewAccountDetails,
    UserCredential
} from './models/user.models';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private httpClient: HttpClient) { }

    // Method to login as guest
    loginAsGuest(): Observable<Response> {
        return this.httpClient.get<Response>(environment.apiUrl);
    }

    // Method to handle login of user
    verifyLoginCreds(cred: UserCredential): Observable<Response> {
        // Creating query to send user creds in gql format
        const query = `query {
            login(email: "${cred.email}", pass: "${cred.pass}") {
                success
                type
            }
        }`;
        
        // Sending input credentials to backend and getting back response
        return this.httpClient.post<Response>(environment.apiUrl + "graphql?query=" + query, {});
    }

    /*
    // Method to validate credentials
    validateCreds(email: string, pass: string): boolean {
        return true;
    }
    */

    // Method to validate creadentials and create an account
    createAccount(cred: NewAccountDetails): Observable<Response> {
        // Creating query to send new credentials in gql format
        const query = `mutation {
            signup(
                cred: {
                    email: "${cred.email}",
                    pass: "${cred.newPass}",
                }
            ) {
                success
                type
            }

            updateDetails(
                email: "${cred.email}",
                details: {
                    firstName: "${cred.firstName}",
                    lastName: "${cred.lastName}",
                    phone: 0,
                }
            ) {
                success
                type
                data
            }
        }`;

        // Sending new credentials to backend and getting back response
        return this.httpClient.post<Response>(environment.apiUrl + "graphql?query=" + query, {});
    }
}
