import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Routes
import { routes } from './app.routes';

// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { GithubUsersComponent } from './github-users/github-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorHandlingComponent,
    GithubUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
