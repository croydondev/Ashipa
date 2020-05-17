import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UrlGuardService implements CanActivate {
  path;
  route;
  constructor(private sessionService: SessionService) { 
    
  }

  canActivate(activeRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      return true;
  }  
}
