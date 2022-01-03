import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { DataStoreService } from 'src/app/data-store.service';
import { UserCredential } from 'src/app/models/user.models'; 
import { UserService } from 'src/app/user.service';

@Component({
    selector: 'app-login-modal',
    templateUrl: './login-modal.component.html',
    styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

    email: string;                                                      // To store the email
    pass: string;                                                       // To store the password
    loginStatus: boolean;                                               // To store status of login
    invalidInputWarn: boolean;                                          // To store if the input was invalid
    @Output() loginStatusChangeEvent = new EventEmitter<boolean>();     // To emit new login status to parent

    // The constructor
    constructor( 
        public dialogRef: MatDialogRef<LoginModalComponent>,
        private userService: UserService,
        private router: Router,
        private dataStoreService: DataStoreService
    ) { }

    ngOnInit(): void {
    }

    /* EVENTS */

    // To handle clicking of login button
    loginClick(): void {
        // Validating input
        if(this.email && this.pass) {
            // Verify credentials
            this.userService.loginUser(new UserCredential().deserialize({ email: this.email, pass: this.pass }))
                .subscribe((res) => {
                    console.log(res);
                    // Evaluating response
                    // If logged in
                    if(res.data.login.success) {
                        this.dataStoreService.userLoggedIn = true;
                        this.dataStoreService.authorizationToken = res.data.login.data.authorizationToken;

                        // Navigating to user-dashboard
                        this.router.navigate(['dashboard']);

                        // Closing this
                        this.dialogRef.close();
                    }
                });
        }
        else {
            this.invalidInputWarn = true;
        }
    }

    // To cancel login and close dialog
    cancelClick(): void {
        this.dialogRef.close();
    }

}
