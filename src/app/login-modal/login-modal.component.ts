import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login-modal',
    templateUrl: './login-modal.component.html',
    styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

    // The constructor
    constructor() { }

    ngOnInit(): void {
    }

    // Method to handle clicking of login button
    loginClick(): void {
        console.log("Login");
    }

}
