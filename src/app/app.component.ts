import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title: string = 'smart-note';
    private toolbarTitle: string;                                      // To store text to be shown on toolbar title
    loggedIn: boolean;                                                 // To store whether user is looged in or not
    
    // Init hook method to initialise windows height
    ngOnInit() {
        const viewHeight = window.innerHeight;
        const viewWidth = window.innerWidth;
        const viewport = document.querySelector("meta[name=viewport]");
        viewport?.setAttribute("content", "height=" + viewHeight + "px, width=" + viewWidth + "px, initial-scale=1.0");
    }

    // The constructor
    constructor(
        public dialog: MatDialog,
        private router: Router
    ) {
        this.toolbarTitle = "Smart Notes";
        this.loggedIn = false;

        // Opening homepage
        this.router.navigate(['home']);
    }

    /* GETTER AND SETTERS */
    
    /* GETTERS */
    
    // Method to get current toolbar title
    getToolbarTitle(): string {
        return this.toolbarTitle;
    }

    /* SETTERS */
    
    // Method to set toolbar title
    setToolbarTitle(title: string): void {
        this.toolbarTitle = title;
    }

    /* EVENTS */

    // Method to show login dialog
    showLoginDialog(): void {
        const dialogRef = this.dialog.open(LoginModalComponent, { maxWidth: "100%" });

        // Get login status after closing dialog
        dialogRef.afterClosed().subscribe(res => {
            this.loggedIn = res;
        });
    }

    // Method to handle clicking of signup button
    signupClick(): void {
        this.router.navigate(['accounts/create']);
        this.setToolbarTitle('Create an account');
    }
}