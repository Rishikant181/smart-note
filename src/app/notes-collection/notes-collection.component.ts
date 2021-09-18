import { Component, OnInit } from '@angular/core';

import { NoteList } from 'src/assets/types';
import { NotesService } from '../notes.service';

@Component({
    selector: 'app-notes-collection',
    templateUrl: './notes-collection.component.html',
    styleUrls: ['./notes-collection.component.css']
})

export class NotesCollectionComponent implements OnInit {
    // Global vars    
    // To store the list of notes
    noteList:NoteList = {
        "title": []
    };
    
    constructor(private notesService:NotesService) {
        notesService.getNotesList().subscribe((data) => {
            this.noteList = data;
        });
    }

    ngOnInit(): void {
    }
}
