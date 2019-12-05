import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherAlertsComponent } from './weather-alerts/weather-alerts.component';
import { MiaComponent } from './mia/mia.component';
import { HelpForumComponent } from './help-forum/help-forum.component';
import { PreparationTipsComponent } from './preparation-tips/preparation-tips.component';
import { FindShelterComponent } from './find-shelter/find-shelter.component';
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
import { FormsModule } from '@angular/forms';
import { EntryDetailsComponent } from './entry/entry-details/entry-details.component';
import { EntryListComponent } from './entry/entry-list/entry-list.component';
import { CreateEntryComponent } from './entry/create-entry/create-entry.component';
import { AccoutCreatedComponent } from './sign-up/accout-created/accout-created.component';
import { LoginSuccessComponent } from './login/login-success/login-success.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PostFilterPipe } from './help-forum/post-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherAlertsComponent,
    MiaComponent,
    HelpForumComponent,
    PreparationTipsComponent,
    FindShelterComponent,
    LoginComponent,
    SignUpComponent,
    FeedComponent,
    SearchComponent,
    RequestHelpComponent,
    ProvideHelpComponent,
    PostComponent,
    EntryDetailsComponent,
    EntryListComponent,
    CreateEntryComponent,
    AccoutCreatedComponent,
    LoginSuccessComponent,
    PostFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NoopAnimationsModule // for the database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
