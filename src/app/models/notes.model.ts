// This file contains various objects for holding data relaing to notes

import { Deserializable } from "./deserializable";

// Object to store the metadata of each note
export class NoteMeta implements Deserializable {
    // Member data
    id: string;                                                     // To store note internal id
    title: string;                                                  // To store the note title
    subtitle: string;                                               // To store note subtitle
    pages: number;                                                  // To store number of pages in note

    // Member methods
    // Method to deserialize input data into the NoteMeta object
    deserialize(data: any) {
        Object.assign(this, data);
        return this;
    }
}

// Object to store the note list
export class NoteList implements Deserializable {
    // Member data
    notes:NoteMeta[];                                               // To store list of notes' metadata

    // Member methods
    // Method to deserialize input data into NoteList object
    deserialize(data: any) {
        Object.assign(this, data);
        return this;
    }
}