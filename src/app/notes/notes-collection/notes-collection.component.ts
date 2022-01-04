import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NotesService } from 'src/app/services/notes/notes.service';
import { NoteList, NoteMeta } from 'src/app/models/notes.model';
import { NoteDetailsComponent } from 'src/app/notes/note-details/note-details.component';
import { NewNoteComponent } from 'src/app/notes/new-note/new-note.component';

@Component({
    selector: 'app-notes-collection',
    templateUrl: './notes-collection.component.html',
    styleUrls: ['./notes-collection.component.scss']
})

export class NotesCollectionComponent implements OnInit {
    // Global vars    
    noteList: NoteList;                                                     // To store the list of notes
    noteMeta: NoteMeta;                                                     // To store the details of each note
    
    constructor(
        private notesService:NotesService,
        private dialog:MatDialog) {
        this.noteList = notesService.getNoteList();
    }

    ngOnInit(): void {
    }

    /* EVENTS */

    // To show details of a note in a Dialog
    noteCardClick(note: any): void {
        this.noteMeta = this.notesService.getNoteMeta(note.id);
        this.dialog.open(NoteDetailsComponent, {
            data: note,
            panelClass: 'note-detail'
        });
    }

    // To show modal for addition of new note
    addNoteClick(project: string): void {
        this.dialog.open(NewNoteComponent, {
            data: {
                "name": project
            }
        });
    }
}
