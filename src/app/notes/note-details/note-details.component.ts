import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NoteMeta } from 'src/app/models/notes.model';

@Component({
    selector: 'app-note-details',
    templateUrl: './note-details.component.html',
    styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
    note: NoteMeta;                                                 // To store details of note

    constructor(@Inject(MAT_DIALOG_DATA) public data:NoteMeta) {
        this.note = data;
    }

    ngOnInit(): void {
    }

}
