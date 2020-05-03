import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { __capcp__AuthService } from "./service/__cp__-auth.service";


@Injectable()
export class __capcp__AuthGuardCanActivate implements CanActivate, CanActivateChild {

  private static readonly config = {
    loginRoute: '/anmelden'
  };

  constructor(
    private readonly router: Router,
    private readonly authService: __capcp__AuthService,
    @Inject(DOCUMENT) private readonly document: any
  ) {
  }

  static forRoot(config) {
    Object.assign(this.config, config);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivateChild(route, state);
  }


  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if (window.location.href.indexOf('http://localhost') === 0) {
    //   return true; // mock!
    // }
    const url: string = state.url;
    return this.checkLogin(url);
  }


  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    // Store the attempted URL for redirecting
    this.authService.setRedirectUrl(url);

    this.router.navigate([__capcp__AuthGuardCanActivate.config.loginRoute]);
    return false;
  }

}
