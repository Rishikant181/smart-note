import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NewUserCreds } from '../models/user.models';
import { password } from '../validators/accounting';
import { UserService } from '../user.service';

@Component({
    selector: 'app-account-creation',
    templateUrl: './account-creation.component.html',
    styleUrls: ['./account-creation.component.scss']
})
export class AccountCreationComponent implements OnInit {

    // Initializing form group
    accountForm = new FormGroup({
        firstName: new FormControl('', Validators.required),                    // To store first name
        lastName: new FormControl('', Validators.required),                     // To store last name
        email: new FormControl('', [Validators.email, Validators.required]),    // To store email
        newPass: new FormControl('', [password(8, 20), Validators.required]),   // To store new password
        conPass: new FormControl(''),                                           // To store confirmation password
    });

    validationError: string;                                                    // To store validation error message
    
    @Output() titleEmitter = new EventEmitter<string>();                        // To emit component title

    // The constructor
    constructor(
        private userService: UserService
    ) {
        this.validationError = "";
    }

    // OnInit lifecycle hook
    ngOnInit(): void {
        this.titleEmitter.emit("Create Account");
    }

    /* Getter methods for returning individual form control */
    // For first name form control
    get firstName() {
        return this.accountForm.get('firstName');
    }    

    // For last name form control
    get lastName() {
        return this.accountForm.get('lastName');
    }

    // For email form control
    get email() {
        return this.accountForm.get('email');
    }

    // For new password form control
    get newPass() {
        return this.accountForm.get('newPass');
    }

    // For confirmation pasword form control
    get conPass() {
        return this.accountForm.get('conPass');
    }

    /* DOM events */
    // Method to validate newPass and conPass on password change
    conPassChange(event: Event): void {
        // Checking if password and confirmation password match
        if((event.target as HTMLInputElement).value !== this.newPass?.value) {
            this.validationError = "Confirmation password does not match!";
        }
    }
    
    // Method to handle clicking of create account
    submitClick(): void {
        this.userService.createAccount(new NewUserCreds().deserialize(this.accountForm.value));
    }
}
