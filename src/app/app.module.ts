import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'
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
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatDialogModule,
        MatButtonModule,
        MatGridListModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
