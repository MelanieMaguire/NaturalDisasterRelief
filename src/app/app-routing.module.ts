import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MiaComponent } from './mia/mia.component';
import { HelpForumComponent } from './help-forum/help-forum.component';
import { PreparationTipsComponent } from './preparation-tips/preparation-tips.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'mia', component: MiaComponent },
  { path: 'help_forum', component: HelpForumComponent },
  { path: 'preparation_tips', component: PreparationTipsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign_up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
