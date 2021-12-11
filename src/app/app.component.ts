// External libs
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

// Custom libs
import { LoginModalComponent } from './login-modal/login-modal.component';
import { UserService } from './user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title: string = 'smart-note';
    private toolbarTitle: string;                                      // To store text to be shown on toolbar title
    userLoggedIn: boolean;                                             // To store whether user is looged in or not
    guestLoggedIn: boolean;                                            // To store whether logged in as guest or not
    authorizationToken: string;                                        // To store the authorization token
    
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
        private userService: UserService,
        private router: Router
    ) {
        this.toolbarTitle = "Smart Notes";
        this.userLoggedIn = false;

        // Logging in as guest
        userService.loginAsGuest().subscribe((res) => {
            this.guestLoggedIn = res.success;
            
            // Ignoring strict type checking for this line
            // @ts-ignore
            this.authorizationToken = res.data.authorizationToken;
        });

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
            this.userLoggedIn = res;
        });
    }

    // Method to handle clicking of signup button
    signupClick(): void {
        this.router.navigate(['accounts/create']);
        this.setToolbarTitle('Create an account');
    }
}