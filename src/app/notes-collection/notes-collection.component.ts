import { Component, OnInit } from '@angular/core';

import { NotesService } from '../notes.service';

@Component({
    selector: 'app-notes-collection',
    templateUrl: './notes-collection.component.html',
    styleUrls: ['./notes-collection.component.css']
})

export class NotesCollectionComponent implements OnInit {
    notes:string[] = [];
    
    constructor(private notesService:NotesService) {
        this.notes = notesService.getNotes();
    }

    ngOnInit(): void {
    }

    onClick(): void {
        console.log("Hello World");
    }
}
