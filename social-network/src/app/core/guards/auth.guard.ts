import { CanActivate, 
    Router, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  constructor(
        private authService: AuthService, 
        private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, snapshot: RouterStateSnapshot) {
      if(this.authService && this.authService.authInfo) {
          const { token } = this.authService.authInfo;

          if(token) {
              return true;
          }
      }

      this.router.navigate(['/welcome']);

      return false;
  }
}