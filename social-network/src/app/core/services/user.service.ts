import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { SocialNetworkUser } from '../core.models';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  currentUser: SocialNetworkUser;

  constructor(private http: HttpClient,
    private authService: AuthService) {}

  getUserProfile() {
      return this.http
      .get(`${environment.apiBaseUrl}/user`)
      .pipe(tap((user: SocialNetworkUser) => (this.currentUser = user)));
  };
}