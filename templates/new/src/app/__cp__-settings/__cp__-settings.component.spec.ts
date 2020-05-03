import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { __capcp__SettingsComponent } from './__cp__-settings.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('DbSettingsPage', () => {
  let component: __capcp__SettingsComponent;
  let fixture: ComponentFixture<__capcp__SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [__capcp__SettingsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],

      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
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
