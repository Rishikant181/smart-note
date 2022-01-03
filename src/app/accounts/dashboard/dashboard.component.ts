import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectComponent } from 'src/app/notes/new-project/new-project-modal.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    @Output() titleEmitter = new EventEmitter<String>();

    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit(): void {
        // Emit component name to parent
        this.titleEmitter.emit("My Dashboard");
    }

    /* EVENTS */

    // To handle clicking on new project button
    newProjectClick(): void {
        this.dialog.open(NewProjectComponent);
    }

}
