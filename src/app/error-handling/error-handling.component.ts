import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
})
export class ErrorHandlingComponent implements OnInit {
  route: string;
  constructor(private _activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.route = this._activateRoute.snapshot.url[0].path;
  }

}
