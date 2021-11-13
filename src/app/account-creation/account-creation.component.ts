import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
    selector: 'app-account-creation',
    templateUrl: './account-creation.component.html',
    styleUrls: ['./account-creation.component.scss']
})
export class AccountCreationComponent implements OnInit {

    // Initializing form group
    accountForm = new FormGroup({
        firstName: new FormControl(''),                                         // To store first name
        lastName: new FormControl(''),                                          // To store last name
        email: new FormControl('', Validators.email),                           // To store email
        newPass: new FormControl(''),                                           // To store new password
        conPass: new FormControl(''),                                           // To store confirmation password
    });

    validationError: string;                                                    // To store validation error message
    
    @Output() titleEmitter = new EventEmitter<string>();                        // To emit component title

    // The constructor
    constructor(
        private userService: UserService
    ) {
        this.validationError = '';
    }

    // OnInit lifecycle hook
    ngOnInit(): void {
        this.titleEmitter.emit("Create Account");
    }

    /* Getter methods for returning individual form control */
    // For first name form control
    get firstName() {
        return this.accountForm.get('firstName')
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
    // Method to handle clicking of create account
    submitClick(): void {
        this.userService.createAccount(this.accountForm.value.email, this.accountForm.value.newPass);
    }
}
