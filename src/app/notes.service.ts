import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { data } from './notes.service.data';
import { NoteList, NoteMeta } from '../app/models/notes.model';

@Injectable({
    providedIn: 'root'
})

export class NotesService {
    
    // The constructor
    constructor(private http: HttpClient) {
    }

    // Method to get list of all notes
    getNoteList(): NoteList {
        return new NoteList().deserialize(data);
    }

    // Method to get details of the note using note id
    getNoteMeta(id: string): NoteMeta {
        for(var note of data.notes) {
            if(note.id == parseInt(id)) {
                return new NoteMeta().deserialize(note);
            }
        }
        return new NoteMeta();
    }
}
