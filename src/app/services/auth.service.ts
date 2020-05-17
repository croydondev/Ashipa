import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { SessionService } from '../services/session.service';
import { Subscription, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UrlGuardService implements CanActivate {
  path;
  route;
  constructor(private sessionService: SessionService) { 
    
  }

  canActivate(activeRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return false;
  }  
}
