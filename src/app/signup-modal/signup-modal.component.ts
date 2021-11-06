import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { UserService } from '../user.service';

@Component({
    selector: 'app-signup-modal',
    templateUrl: './signup-modal.component.html',
    styleUrls: ['./signup-modal.component.scss']
})

export class SignupModalComponent implements OnInit {
    email: string;                                                    // To store the email address
    pass: string;                                                     // To store the new password
    accAdded: boolean;                                                // To store whether account was added or not

    constructor(
        public dialogRef: MatDialogRef<SignupModalComponent>,
        private userService: UserService
    ) {
        this.accAdded = false;
    }

    ngOnInit(): void {
    }

    // Method to handle clicking of create account button
    createAccountClick(): void {
        this.accAdded = this.userService.validateCreds(this.email, this.pass);
        console.log(this.accAdded);
    }

    // Method to cancel signup and close dialog
    cancelClick(): void {
        this.dialogRef.close();
    }
}
