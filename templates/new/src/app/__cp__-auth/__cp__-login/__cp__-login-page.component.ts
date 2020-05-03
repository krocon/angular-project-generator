import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { takeWhile } from 'rxjs/operators';
import { __capcp__TypedDataService } from "../../__cp__-common/__cp__-typed-data-service";
import { __capcp__AuthService } from "../service/__cp__-auth.service";
import { LoginRequestData } from "../data/login.request.data";

@Component({
  selector: 'app-__cp__-start',
  templateUrl: './__cp__-login-page.component.html',
  styleUrls: ['./__cp__-login-page.component.scss'],
})

export class __capcp__LoginPageComponent implements OnInit, OnDestroy {

  private static readonly innerService =
    new __capcp__TypedDataService<LoginRequestData>('login', new LoginRequestData('', '', true));

  @ViewChild('username', {static: false}) username: ElementRef;

  login: object;
  formGroup: FormGroup;
  buttonSpinnerVisible = false;
  hidePassword = true;
  focusOnUsername = true;
  focusOnPassword = true;

  isErrorNetwork = false;
  isUnauthorized = false;
  isErrorForbidden = false;
  isErrorUnavailable = false;
  isErrorInternalServer = false;

  initialized = false;

  private alive = true;

  constructor(
    private readonly authService: __capcp__AuthService,
    private readonly formBuilder: FormBuilder,
    public readonly router: Router
  ) {
  }

  get hasError(): boolean {
    return this.isErrorUnavailable
      || this.isErrorInternalServer
      || this.isErrorForbidden
      || this.isErrorNetwork
      || this.isUnauthorized;
  }

  get linkPasswordReset(): string {
    return 'TODO-linkPasswordReset'
  }

  get errorMesasage(): string {
    if (this.isErrorNetwork) {
      return 'Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.';
    }
    if (this.isUnauthorized) {
      return 'Anmeldedaten sind ungültig oder Passwort ist abgelaufen.';
    }
    if (this.isErrorForbidden) {
      return 'Sie sind zur Nutzung aktuell nicht berechtigt.';
    }
    if (this.isErrorInternalServer) {
      return 'Die Anfrage wurde mangels Berechtigung des Clients nicht durchgeführt, bspw. weil der authentifizierte Benutzer nicht berechtigt ist.';
    }
    if (this.isErrorUnavailable) {
      return 'Es ist ein Serverfehler aufgetreten. Versuchen Sie es bitte später noch einmal.';
    }
    return '';
  }

  ngOnInit(): void {
    this.buildForm();
  }

  disableLoginInputs() {
    this.formGroup.controls.username.disable();
    this.formGroup.controls.password.disable();
  }

  buildForm() {
    this.formGroup = this.formBuilder
      .group({
        username: new FormControl('', [Validators.required, Validators.minLength(2)]),
        password: new FormControl('', [Validators.required, Validators.minLength(2)]),
        remember: new FormControl(false)
      });
    const loginData = __capcp__LoginPageComponent.innerService.getValue();
    if (loginData?.remember) {
      this.formGroup.patchValue(loginData);
      this.focusOnPassword = !!loginData.username;
      this.focusOnUsername = !this.focusOnPassword;
    }
    this.initialized = true;
  }

  fetchAuthLogin() {
    const formCredentials = this.getFormCredentials();
    this.authService
      .login(formCredentials)
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (data) => this.loginHandler(),
        (err) => this.errorHandler(err)
      );
  }

  loginHandler() {
    this.enableLoginInputs();
    this.router.navigate([this.authService.getNextNavigation()]);
  }


  errorHandler(error: HttpErrorResponse) {
    const status = error.status;
    this.isErrorNetwork = status === 0 || status === 404;
    this.isUnauthorized = status === 401;
    this.isErrorForbidden = status === 403;
    this.isErrorInternalServer = status === 500;
    this.isErrorUnavailable = status === 503;
    this.enableLoginInputs();
  }


  getFormCredentials(): LoginRequestData {
    return new LoginRequestData(
      this.formGroup.controls.username.value,
      this.formGroup.controls.password.value,
      this.formGroup.controls.remember.value
    );
  }

  onLogin() {
    if (this.formGroup.valid) {
      const raw: LoginRequestData = this.formGroup.getRawValue() as LoginRequestData;
      let loginRequestData = new LoginRequestData(raw.username, '', raw.remember);
      __capcp__LoginPageComponent.innerService.update(loginRequestData);

      this.resetErrors();
      this.buttonSpinnerVisible = true;
      this.disableLoginInputs();
      this.fetchAuthLogin();
    }
  }

  enableLoginInputs() {
    this.formGroup.controls.username.enable();
    this.formGroup.controls.password.enable();
    this.buttonSpinnerVisible = false;
  }

  resetErrors() {
    this.isErrorNetwork = false;
    this.isUnauthorized = false;
    this.isErrorForbidden = false;
    this.isErrorUnavailable = false;
    this.isErrorInternalServer = false;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
