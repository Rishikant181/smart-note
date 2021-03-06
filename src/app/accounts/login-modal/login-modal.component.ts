import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { DataStoreService } from 'src/app/services/data-store/data-store.service';
import { UserCredential } from 'src/app/models/user.models'; 
import { UserService } from 'src/app/services/user/user.service';
import { LoggerService } from 'src/app/services/logger/logger.service';

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
        public dataStoreService: DataStoreService
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
                    // Evaluating response
                    // If logged in
                    if(res.success) {
                        // Setting login and authorization status in global data store
                        this.dataStoreService.userLoggedIn = true;
                        this.dataStoreService.authorizationToken = res.data.authorizationToken;

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
