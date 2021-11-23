import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

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
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    /* EVENTS */

    // To handle clicking of login button
    loginClick(): void {
        // Validating input
        if(this.email && this.pass) {
            // Verify credentials
            this.loginStatus = this.userService.verifyLoginCreds(this.email, this.pass);
            
            // Closing dialog and passing login status back to parent
            this.dialogRef.close({ loginStatus: this.loginStatus });

            // Navigating to user-dashboard
            this.router.navigate(['dashboard']);
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
