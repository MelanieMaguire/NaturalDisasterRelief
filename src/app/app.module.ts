import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MiaComponent } from './mia/mia.component';
import { HelpForumComponent } from './help-forum/help-forum.component';
import { PreparationTipsComponent } from './preparation-tips/preparation-tips.component';
import { FindShelterComponent } from './find-shelter/find-shelter.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import { EntryDetailsComponent } from './entry/entry-details/entry-details.component';
import { EntryListComponent } from './entry/entry-list/entry-list.component';
import { CreateEntryComponent } from './entry/create-entry/create-entry.component';
import { AccoutCreatedComponent } from './sign-up/accout-created/accout-created.component';
import { LoginSuccessComponent } from './login/login-success/login-success.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiaComponent,
    HelpForumComponent,
    PreparationTipsComponent,
    FindShelterComponent,
    LoginComponent,
    SignUpComponent,
    EntryDetailsComponent,
    EntryListComponent,
    CreateEntryComponent,
    AccoutCreatedComponent,
    LoginSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule // for the database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
