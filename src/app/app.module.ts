import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { NotesCollectionComponent } from 'src/app/notes/notes-collection/notes-collection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteDetailsComponent } from 'src/app/notes/note-details/note-details.component';
import { NewNoteComponent } from 'src/app/notes/new-note/new-note.component';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { LoginModalComponent } from 'src/app/accounts/login-modal/login-modal.component';
import { GraphQLModule } from 'src/app/graphql.module';
import { DashboardComponent } from 'src/app/accounts/dashboard/dashboard.component';
import { NewProjectComponent } from 'src/app/notes/new-project/new-project-modal.component';
import { AccountCreationComponent } from 'src/app/accounts/account-creation/account-creation.component';
import { DataStoreService } from 'src/app/services/data-store/data-store.service';

import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        NotesCollectionComponent,
        NoteDetailsComponent,
        NewNoteComponent,
        HomePageComponent,
        LoginModalComponent,
        DashboardComponent,
        NewProjectComponent,
        AccountCreationComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        GraphQLModule,
    ],
    providers: [
        {
            // Connecting to graphql server
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: environment.apiUrl + 'graphql/',
                    })
                }
            },
            deps: [HttpLink]
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
