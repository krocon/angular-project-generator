import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { __capcp__WelcomeComponent } from './__cp__-welcome.component';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ExtendedModule, FlexLayoutModule, FlexModule } from "@angular/flex-layout";

describe('__capcp__WelcomeComponent', () => {
  let component: __capcp__WelcomeComponent;
  let fixture: ComponentFixture<__capcp__WelcomeComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        NoopAnimationsModule,
        MatButtonModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: __capcp__WelcomeComponent
          }
        ]),
        ExtendedModule,
        FlexModule,
        FlexLayoutModule
      ],
      declarations: [
        __capcp__WelcomeComponent
      ]
    }).compileComponents();
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(__capcp__WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
