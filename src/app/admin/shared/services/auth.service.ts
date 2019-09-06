import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User, FireBase } from '../../../shared/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()

export class AuthService {

  
  get token(): string {
    const expDate = new Date(localStorage.getItem('fire-token-exp'));
    if (new Date() > expDate) {
      this.logout()
      return null;
    }
    return localStorage.getItem('fire-token');
  }

  constructor(
    private http: HttpClient
  ) {

  }

  login(user: User): Observable<any> {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      )
  }


  logout() {
    this.setToken(null);
  }

  isAuth(): boolean {
    return !! this.token;
  }

  private setToken(response: FireBase | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fire-token', response.idToken);
      localStorage.setItem('fire-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }

}