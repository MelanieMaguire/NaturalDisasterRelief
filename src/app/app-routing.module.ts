import { CreateEntryComponent } from './entry/create-entry/create-entry.component';
import { EntryListComponent } from './entry/entry-list/entry-list.component';
import { RequestHelpComponent } from './help-forum/request-help/request-help.component';
import { FeedComponent } from './help-forum/feed/feed.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WeatherAlertsComponent } from './weather-alerts/weather-alerts.component';
import { MiaComponent } from './mia/mia.component';
import { HelpForumComponent } from './help-forum/help-forum.component';
import { PreparationTipsComponent } from './preparation-tips/preparation-tips.component';
import { FindShelterComponent } from './find-shelter/find-shelter.component';
import { LoginComponent } from './login/login.component';
import { LoginSuccessComponent } from './login/login-success/login-success.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccoutCreatedComponent } from './sign-up/accout-created/accout-created.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'weather_alerts', component: WeatherAlertsComponent},
  { path: 'mia', component: MiaComponent },
  { path: 'help_forum', component: HelpForumComponent },
  { path: 'preparation_tips', component: PreparationTipsComponent },
  { path: 'find_shelter', component: FindShelterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login_success', component: LoginSuccessComponent },
  { path: 'sign_up', component: SignUpComponent },
  { path: 'account_created', component: AccoutCreatedComponent },
 // { path: 'new_entry', component: CreateEntryComponent},
  { path: 'new_entry', component: CreateEntryComponent},
  { path: 'add_entry', redirectTo: '/new_entry'},
  { path: 'back_to_search', redirectTo: '/mia'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
