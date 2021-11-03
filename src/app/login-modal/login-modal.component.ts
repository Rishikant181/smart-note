import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { UserService } from '../user.service';

@Component({
    selector: 'app-login-modal',
    templateUrl: './login-modal.component.html',
    styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

    email: String;                                                      // To store the email
    pass: String;                                                       // To store the password
    @Output() loginStatusChangeEvent = new EventEmitter<boolean>();     // To emit new login status to parent

    // The constructor
    constructor(
        public dialogRef: MatDialogRef<LoginModalComponent>,
        private userService: UserService
    ) { }

    ngOnInit(): void {
    }

    // Method to handle clicking of login button
    loginClick(): void {
        // Verify credentials
        var loginStatus = this.userService.verifyLoginCredentials(this.email, this.pass);
        
        // Closing dialog and passing login status back to parent
        this.dialogRef.close({ loginStatus: loginStatus });
    }

}
