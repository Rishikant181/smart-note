import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesCollectionComponent } from './notes-collection/notes-collection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
    declarations: [
        AppComponent,
        NotesCollectionComponent,
        NoteDetailsComponent,
        NewNoteComponent,
        HomePageComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
