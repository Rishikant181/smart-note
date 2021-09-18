import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NoteList, NoteDetail } from 'src/assets/types';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class NotesService {
    
    // The constructor
    constructor(private http: HttpClient) {
    }

    // Method to get list of all notes
    getNotesList(): Observable<NoteList> {
        return this.http.get<NoteList>(`${environment.apiUrl}/rishikant181/projects/list`, { observe: 'body', responseType: 'json' })
    }

    // Method to get the full detailed note
    getNoteDetails(noteId: number) {
        return this.http.get<NoteDetail>(`${environment.apiUrl}/rishikant181/projects/${noteId}`);
    }
}
