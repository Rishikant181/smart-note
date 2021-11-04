import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    @Output() titleEmitter = new EventEmitter<String>();

    constructor() { }

    ngOnInit(): void {
        // Emit component name to parent
        this.titleEmitter.emit("My Dashboard");
    }

}
