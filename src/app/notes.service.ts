import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class NotesService {
    
    // The constructor
    constructor(private http: HttpClient) {
    }

    // Method to get list of all notes
    getNoteList(): Observable<any> {
        return this.http.get<any>(`${environment.apiUrl}/user/projects/list/`, { observe: 'body', responseType: 'json' });
    }

    // Method to get details of the note using note id
    getNoteMeta(id: string): Observable<any> {
        return this.http.get<any>(`${environment.apiUrl}/user/projects/list/${id}`, { observe: 'body', responseType: 'json' });
    }
}
