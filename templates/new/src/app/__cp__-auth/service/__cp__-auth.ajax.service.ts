import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequestData } from '../data/login.request.data';
import { LoginResponseData } from '../data/login.response.data';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class __capcp__AuthAjaxService {

  private static readonly config = {
    mock: false,
    loginUrl: 'assets/mock-data/auth/login.json',
    logoutUrl: 'assets/mock-data/auth/logout.json',
    logoutMock: true,
  };

  constructor(
    private readonly http: HttpClient
  ) {
  }

  static forRoot(config) {
    Object.assign(this.config, config);
  }

  login(loginData: LoginRequestData): Observable<LoginResponseData> {
    let url = __capcp__AuthAjaxService.config.loginUrl;
    if (url.indexOf('mock-data') > -1) {
      return this.http.get<LoginResponseData>(url);
    }
    return this.http.post<LoginResponseData>(url, loginData);
  }


}
