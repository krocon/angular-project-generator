import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { __capcp__SettingsComponent } from "./__cp__-settings/__cp__-settings.component";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BrowserModule } from "@angular/platform-browser";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { AppRoutingModule } from "./app-routing.module";
import { __capcp__NavModule } from "./__cp__-nav/__cp__-nav.module";
import { __capcp__AuthModule } from "./__cp__-auth/__cp__-auth.module";
import { __capcp__SettingsModule } from "./__cp__-settings/__cp__-settings.module";

describe('AppComponent', () => {

  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,

        BrowserModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,

        AppRoutingModule,
        __capcp__NavModule,
        __capcp__AuthModule,
        __capcp__SettingsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: __capcp__SettingsComponent
          }
        ]),
      ],
      declarations: [AppComponent]
    }).compileComponents();
    router = TestBed.get(Router);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
