import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubService } from './github.service';


import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html'
})
export class GithubUsersComponent {
  users: [{}];
  search = new FormControl();
  constructor(
    private _githubService: GithubService) {
      this.search.valueChanges.debounceTime(400).subscribe((searchValue) => {
        this._githubService.getUsers(searchValue).subscribe((response) => {
        this.users = response['items'];
        });
      });
  }
  // onSearch() {
  //   console.log('changes', this.searchValue);
    
  // }

}
