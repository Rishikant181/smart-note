import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginModalComponent } from './login-modal/login-modal.component';
import { SignupModalComponent } from './signup-modal/signup-modal.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'smart-note';
    toolbarTitle: string;                                              // To store text to be shown on toolbar title
    loggedIn: boolean;                                                 // To store whether user is looged in or not

    // The constructor
    constructor(public dialog: MatDialog) {
        this.toolbarTitle = "Smart Notes";
        this.loggedIn = true;
    }

    // Method to show login dialog
    showLoginDialog(): void {
        this.dialog.open(LoginModalComponent);
    }

    // Method to show signup modal
    showSignupDialog(): void {
        this.dialog.open(SignupModalComponent);
    }
}