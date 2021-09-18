import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesCollectionComponent } from './notes-collection/notes-collection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteDetailsComponent } from './note-details/note-details.component';

@NgModule({
    declarations: [
        AppComponent,
        NotesCollectionComponent,
        NoteDetailsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatGridListModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
