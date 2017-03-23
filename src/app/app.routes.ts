import { HomeComponent } from './home/home.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { GithubUsersComponent } from './github-users/github-users.component';

export const routes = [
  { path: 'github', component: GithubUsersComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorHandlingComponent }
];
