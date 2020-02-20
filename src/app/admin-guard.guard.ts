import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from './shared/services/token.service' 
import {Router} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
 
})


export class AdminGuardGuard implements CanActivate {
  constructor(private _token:TokenService,
    private _route:Router
    ){
    
  }
  

  canActivate(
   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(localStorage.getItem('token')){
         return true;
      }else{
        
        this._route.navigate(['/']);
      }
  }
  
}
