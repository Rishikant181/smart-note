import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NotesService } from '../notes.service';
import { NoteList, NoteMeta } from '../models/notes.model';
import { NoteDetailsComponent } from '../note-details/note-details.component';

@Component({
    selector: 'app-notes-collection',
    templateUrl: './notes-collection.component.html',
    styleUrls: ['./notes-collection.component.css']
})

export class NotesCollectionComponent implements OnInit {
    // Global vars    
    noteList: NoteList;                                                     // To store the list of notes
    noteMeta: NoteMeta;                                                     // To store the details of each note
    
    constructor(
        private notesService:NotesService,
        private dialog:MatDialog) {
        notesService.getNoteList().subscribe((data) => {
            this.noteList = new NoteList();
            this.noteList.deserialize(data);
        }, (err) => {
            console.log(err)
        })
    }

    ngOnInit(): void {
    }

    // Method to show details of a note in a Dialog
    noteCardClick(note: any): void {
        this.notesService.getNoteMeta(note.id).subscribe((data) => {
            this.noteMeta = new NoteMeta();
            this.noteMeta.deserialize(data);
            console.log(this.noteMeta)              //
            this.dialog.open(NoteDetailsComponent, {
                data: note,
                panelClass: 'note-detail'
            })
        })
    }
}
