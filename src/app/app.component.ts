import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './shared/providers/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'covid19sa-frotnend';
  authenticated: boolean
  subscription: Subscription

  constructor (private authService: AuthService) {

  }

  ngOnInit () {
    this.subscription = this.authService.authenticated
      .subscribe(val => this.authenticated = val)
  }

  ngOnDestroy () {
    this.subscription.unsubscribe()
  }

}
