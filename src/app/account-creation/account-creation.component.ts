import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-account-creation',
    templateUrl: './account-creation.component.html',
    styleUrls: ['./account-creation.component.scss']
})
export class AccountCreationComponent implements OnInit {

    @Output() titleEmitter = new EventEmitter<string>();                        // To emit component title

    constructor() { }

    ngOnInit(): void {
        this.titleEmitter.emit("Create Account");
    }

}
