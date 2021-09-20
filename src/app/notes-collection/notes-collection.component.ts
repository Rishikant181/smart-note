import { Component, OnInit } from '@angular/core';

import { NotesService } from '../notes.service';
import { NoteList } from '../models/notes.model';

@Component({
    selector: 'app-notes-collection',
    templateUrl: './notes-collection.component.html',
    styleUrls: ['./notes-collection.component.css']
})

export class NotesCollectionComponent implements OnInit {
    // Global vars    
    // To store the list of notes
    noteList:NoteList;
    
    constructor(private notesService:NotesService) {
        notesService.getNoteList().subscribe((data) => {
            this.noteList = new NoteList;
            this.noteList.deserialize(data);
            console.log(this.noteList)
        })
        console.log(this.noteList)
    }

    ngOnInit(): void {
    }

    // Method to handle clicking of note card
    noteCardClick(note: any): void {
        console.log(note);
    }
}
