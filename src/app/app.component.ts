import { Component } from '@angular/core';

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
    constructor() {
        this.toolbarTitle = "Smart Notes";
        this.loggedIn = false;
    }

    // Method to show login dialog
    showLoginDialog(): void {
        console.log("Login")
    }
}