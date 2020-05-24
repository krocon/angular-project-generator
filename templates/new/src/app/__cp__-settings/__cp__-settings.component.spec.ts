import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { __capcp__SettingsComponent } from './__cp__-settings.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { __capcp__SettingsService } from "./service/__cp__-settings.service";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe('DbSettingsPage', () => {
  let component: __capcp__SettingsComponent;
  let fixture: ComponentFixture<__capcp__SettingsComponent>;
  let router: Router;
  let service: __capcp__SettingsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        __capcp__SettingsComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        CommonModule,
        FormsModule,
        NoopAnimationsModule,
        MatSelectModule,
        MatButtonModule,
        MatFormFieldModule,

        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: __capcp__SettingsComponent
          }
        ]),
      ],
      providers: [
        __capcp__SettingsService
      ]
    }).compileComponents();
    router = TestBed.get(Router);
    service = TestBed.get(__capcp__SettingsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(__capcp__SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
