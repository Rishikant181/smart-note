// External libs
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Custom libs
import { Response } from 'src/app/models/http';
import { environment } from 'src/environments/environment';
import { DataStoreService } from 'src/app/services/data-store/data-store.service';
import {
    NewAccountDetails,
    UserCredential
} from 'src/app/models/user.models';
import {
    createAccountQuery,
    loginUserQuery
} from 'src/app/queries/user.service.queries';
import {
    hashCredential
} from 'src/app/helper/auth';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(
        private httpClient: HttpClient,
        private dataStoreService: DataStoreService,
        private apolloClient: Apollo
    ) { }

    // Method to login as guest
    loginAsGuest(): Observable<Response> {
        return this.httpClient.get<Response>(environment.apiUrl);
    }

    // Method to handle login of user
    loginUser(cred: UserCredential): Observable<Response> {
        // Setting the options for http request
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.dataStoreService.authorizationToken}`
            })
        }
        
        // Hashing password
        cred.pass = hashCredential(cred.pass);

        // Sending input credentials to backend and getting back response
        // Then piping the observable to a map function that returns the actual query response, stripped of additional graphql properties
        return this.apolloClient.query<any>({
            query: loginUserQuery(cred),
            context: options
        }).pipe(map((res) => res.data.login));
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

        // Hashing input credentials
        cred.newPass = hashCredential(cred.newPass);
        
        // Sending new credentials to backend and getting back response
        // Then piping the observable to a map function that returns the actual query response, stripped of additional graphql properties
        return this.apolloClient.mutate<any>({
            mutation: createAccountQuery(cred),
            context: options
        }).pipe(map((res) => res.data.signup));
    }
}
