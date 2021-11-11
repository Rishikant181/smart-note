import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
@Component({
    selector: 'app-account-creation',
    templateUrl: './account-creation.component.html',
    styleUrls: ['./account-creation.component.scss']
})
export class AccountCreationComponent implements OnInit {

    firstName: string;                                                          // To store first name
    lastName: string;                                                           // To store last name
    email: string;                                                              // To store email
    pass: string;                                                               // To store the password
    @Output() titleEmitter = new EventEmitter<string>();                        // To emit component title

    constructor(
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.titleEmitter.emit("Create Account");
    }

    // Method to handle clicking of create account
    createButtonClick(): void {
        console.log(this.userService.createAccount(this.email, this.pass));
    }
}
