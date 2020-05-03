import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponseData } from '../data/login.response.data';
import { __capcp__AuthAjaxService } from './__cp__-auth.ajax.service';
import { map } from 'rxjs/operators';
import { LoginRequestData } from '../data/login.request.data';
import { __capcp__TypedDataService } from "../../__cp__-common/__cp__-typed-data-service";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root',
})
export class __capcp__AuthService {

  public static redirectUrl = '/';

  private static readonly innerService =
    new __capcp__TypedDataService<LoginResponseData>('auth', new LoginResponseData());

  constructor(
    private readonly authAjaxService: __capcp__AuthAjaxService,
    public readonly router: Router
  ) {
  }

  get data(): LoginResponseData {
    return __capcp__AuthService.innerService.getValue();
  }

  get valueChanges$(): Observable<LoginResponseData> {
    return __capcp__AuthService.innerService.valueChanges$;
  }

  setRedirectUrl(url: string) {
    return __capcp__AuthService.redirectUrl = url;
  }

  isLoggedIn(): boolean {
    return !!__capcp__AuthService.innerService.getValue().token;
  }

  logout() {
    // tslint:disable:no-console
    console.info('Logging out...');
    this.router.navigate(['/willkommen']);
    __capcp__AuthService.innerService.update(new LoginResponseData('', '', '','', ''));
  }

  login(loginData: LoginRequestData): Observable<LoginResponseData> {
    return this.authAjaxService
      .login(loginData)
      .pipe(
        map((responseData: LoginResponseData) => {
          __capcp__AuthService.innerService.update(responseData);
          return responseData;
        })
      );
  }

  getNextNavigation(): string {
    // Get the redirect URL from our auth service. If no redirect has been set, use the default:
    if (this.isLoggedIn() && __capcp__AuthService.redirectUrl) {
      return __capcp__AuthService.redirectUrl;
    }
    return '/';
  }

}
