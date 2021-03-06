// External libs
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

// Custom libs
import { Response } from './models/http';
import { LoginModalComponent } from 'src/app/accounts/login-modal/login-modal.component';
import { UserService } from 'src/app/services/user/user.service';
import { DataStoreService } from 'src/app/services/data-store/data-store.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    // Init hook method to initialise windows height
    ngOnInit() {
        // This one should stay commented out until it's absolute necessary
        /*
        const viewHeight = window.innerHeight;
        const viewWidth = window.innerWidth;
        const viewport = document.querySelector("meta[name=viewport]");
        viewport?.setAttribute("content", "height=" + viewHeight + "px, width=" + viewWidth + "px, initial-scale=1.0");
        */
    }

    // The constructor
    constructor(
        public dialog: MatDialog,
        private userService: UserService,
        public dataStoreService: DataStoreService,
        private router: Router
    ) {
        // Logging in as guest
        this.userService.loginAsGuest().subscribe((rawRes) => {
            // Parsing raw response to a Response object
            const res = new Response().deserialize(rawRes);
            
            // Setting guest login status to true
            dataStoreService.guestLoggedIn = res.success;
            
            // Ignoring strict type checking for this line
            this.dataStoreService.authorizationToken = res.data.authorizationToken;
        });

        // Opening homepage
        this.router.navigate(['home']);
    }

    /* EVENTS */

    // Method to show login dialog
    showLoginDialog(): void {
        this.dialog.open(LoginModalComponent, { maxWidth: "100%" });
    }

    // Method to handle clicking of signup button
    signupClick(): void {
        this.router.navigate(['accounts/create']);
    }
}