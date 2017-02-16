import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
    if(localStorage.getItem('currentUser')){return true;}
  }

  checkLogin(url: string){
    if(this.authService.isLoggedIn){ return true;}
    this.router.navigate(['/login']);
    return false;
  }
}
