import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { AuthInfo } from '../core.models';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
  
  authInfo: AuthInfo;

  constructor(private http: HttpClient) {
    this.authInfo = JSON.parse(localStorage.getItem('auth'));
  }

  login({ email, password }) {
    return this.http
    .post(`${environment.apiBaseUrl}/account/login`, {
        email,
        password
    })
    .pipe(
      tap((info:AuthInfo) => {
        
        this.authInfo = info;
        localStorage.setItem('auth', JSON.stringify(info));
      })
    );
      
  };

  register({ fullName, email, password }) {
    return this.http.post(`${environment.apiBaseUrl}/account`, {
        fullName,
        email,
        password
    });
  };
}