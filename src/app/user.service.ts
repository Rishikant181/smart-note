// External libs
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Custom libs
import { environment } from 'src/environments/environment';
import { DataStoreService } from './data-store.service';
import {
    NewAccountDetails,
    UserCredential
} from './models/user.models';
import {
    createAccountQuery,
    verifyLoginCredsQuery
} from './queries/user.service.queries';
import {
    hashCredential
} from '../app/helper/auth';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(
        private httpClient: HttpClient,
        private dataStoreService: DataStoreService
    ) { }

    // Method to login as guest
    loginAsGuest(): Observable<any> {
        return this.httpClient.get<any>(environment.apiUrl);
    }

    // Method to handle login of user
    verifyLoginCreds(cred: UserCredential): Observable<any> {
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
        return this.httpClient.post<any>(environment.apiUrl + "graphql?query=" + query, {}, options);
    }

    // Method to validate creadentials and create an account
    createAccount(cred: NewAccountDetails): Observable<any> {
        // Setting the options for http request
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.dataStoreService.authorizationToken}`
            })
        };

        // Hashing input credentials
        cred.newPass = hashCredential(cred.newPass);
        
        // Creating query to send new credentials in gql format
        const query = createAccountQuery(cred);

        // Sending new credentials to backend and getting back response
        return this.httpClient.post<any>(environment.apiUrl + "graphql?query=" + query, {}, options);
    }
}
