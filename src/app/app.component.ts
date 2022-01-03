// External libs
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

// Custom libs
import { LoginModalComponent } from './accounts/login-modal/login-modal.component';
import { UserService } from './user.service';
import { DataStoreService } from './data-store.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
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
        public dataStoreService: DataStoreService,
        private router: Router
    ) {
        // Logging in as guest
        userService.loginAsGuest().subscribe((res) => {
            // Setting guest login status to true
            dataStoreService.guestLoggedIn = res.success;
            
            // Ignoring strict type checking for this line
            // @ts-ignore
            this.dataStoreService.authorizationToken = res.data.authorizationToken;
        });

        // Opening homepage
        this.router.navigate(['home']);
    }

    /* EVENTS */

    // Method to show login dialog
    showLoginDialog(): void {
        const dialogRef = this.dialog.open(LoginModalComponent, { maxWidth: "100%" });

        // Get login status after closing dialog
        dialogRef.afterClosed().subscribe(res => {
            this.dataStoreService.userLoggedIn = res;
        });
    }

    // Method to handle clicking of signup button
    signupClick(): void {
        this.router.navigate(['accounts/create']);
        this.dataStoreService.activeComponent = 'Create an account';
    }
}