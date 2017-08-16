///<reference path="../../../node_modules/angular-2-local-storage/dist/local-storage.service.d.ts"/>
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import { LocalStorageService } from 'angular-2-local-storage';
import { User } from './user';

@Injectable()
export class AuthService {

  get isLoggedIn(): boolean {
    return this.localStorageService.get('user') != null;
  }


  login(account: string, password: string): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => {
      const user = new User(account, password);
      this.localStorageService.set('user', user);
    });
  }

  logout(): void {
    this.localStorageService.remove('user');
  }

  constructor(private localStorageService: LocalStorageService) { }

}
