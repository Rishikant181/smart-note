import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProjectMeta } from '../models/notes.model';

@Component({
    selector: 'app-new-note',
    templateUrl: './new-note.component.html',
    styleUrls: ['./new-note.component.scss']
})

export class NewNoteComponent implements OnInit {
    noteTitle: string;
    noteSubTitle: string;
    project: ProjectMeta;

    // The constructor to initialise data
    constructor(@Inject(MAT_DIALOG_DATA) public data: ProjectMeta) {
        this.noteTitle = "";
        this.noteSubTitle = "";
        this.project = data;
    }

    ngOnInit(): void {
    }

    // Method to submit new note details to server
    submitClick(): void {
        console.log(this.project.name);
    }
}
