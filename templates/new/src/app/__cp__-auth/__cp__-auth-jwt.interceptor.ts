import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { __capcp__AuthService } from "./service/__cp__-auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private readonly authService: __capcp__AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const token = this.authService.data.token;
    const header = {};
    if (token) {
      header['Authorization'] = `Bearer ${token}`;
    }
    request = request.clone({
      setHeaders: header
    });

    return next.handle(request);
  }
}
