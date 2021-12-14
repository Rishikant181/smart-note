// External libs
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Custom libs
import { environment } from 'src/environments/environment';
import { DataStoreService } from './data-store.service';
import { Response } from './models/general.models';
import {
    NewAccountDetails,
    UserCredential
} from './models/user.models';
import {
    createAccountQuery,
    verifyLoginCredsQuery
} from './queries/user.service.queries';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(
        private httpClient: HttpClient,
        private dataStoreService: DataStoreService
    ) { }

    // Method to login as guest
    loginAsGuest(): Observable<Response> {
        return this.httpClient.get<Response>(environment.apiUrl);
    }

    // Method to handle login of user
    verifyLoginCreds(cred: UserCredential): Observable<Response> {
        // Setting the options for http request
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.dataStoreService.authorizationToken}`
            })
        }
        
        // Creating query to send user creds in gql format
        const query = verifyLoginCredsQuery(cred);
        
        // Sending input credentials to backend and getting back response
        return this.httpClient.post<Response>(environment.apiUrl + "graphql?query=" + query, {}, options);
    }

    // Method to validate creadentials and create an account
    createAccount(cred: NewAccountDetails): Observable<Response> {
        // Setting the options for http request
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.dataStoreService.authorizationToken}`
            })
        };
        
        // Creating query to send new credentials in gql format
        const query = createAccountQuery(cred);

        // Sending new credentials to backend and getting back response
        return this.httpClient.post<Response>(environment.apiUrl + "graphql?query=" + query, {}, options);
    }
}
