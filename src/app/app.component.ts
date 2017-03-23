import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from './github-users/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ GithubService ]
})
export class AppComponent {
  route: string;
  constructor(
    private _router: Router) {
       _router.events.subscribe(event => this.route = event.url);
    }
}
