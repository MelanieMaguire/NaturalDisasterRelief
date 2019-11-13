import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MiaComponent } from './mia/mia.component';
import { HelpForumComponent } from './help-forum/help-forum.component';
import { PreparationTipsComponent } from './preparation-tips/preparation-tips.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FeedComponent } from './help-forum/feed/feed.component';
import { SearchComponent } from './help-forum/search/search.component';
import { RequestHelpComponent } from './help-forum/request-help/request-help.component';
import { ProvideHelpComponent } from './help-forum/provide-help/provide-help.component';
import { PostComponent } from './help-forum/post/post.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import { EntryDetailsComponent } from './entry/entry-details/entry-details.component';
import { EntryListComponent } from './entry/entry-list/entry-list.component';
import { CreateEntryComponent } from './entry/create-entry/create-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiaComponent,
    HelpForumComponent,
    PreparationTipsComponent,
    LoginComponent,
    SignUpComponent,
    FeedComponent,
    SearchComponent,
    RequestHelpComponent,
    ProvideHelpComponent,
    PostComponent,
    EntryDetailsComponent,
    EntryListComponent,
    CreateEntryComponent
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
