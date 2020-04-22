import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor () {
  }

  login () {

  }

  logout () {

  }

  register () {

  }
}
