import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NotesService {
    // Global vars
    NOTES = [
        "Note1",
        "Note2",
        "Note3",
        "Note4",
        "Note5",
        "Note6",
        "Note7",
        "Note8",
        "Note9",
        "Note10",
    ];
    
    constructor() {         
    }

    getNotes(): string[] {
        return this.NOTES;
    }
}
