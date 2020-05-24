import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { __capcp__NavComponent } from './__cp__-nav.component';
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { __capcp__LogoModule } from "../__cp__-logo/__cp__-logo.module";
import { __capcp__FooterModule } from "../__cp__-footer/__cp__-footer.module";
import { __capcp__CounterModule } from "../__cp__-counter/__cp__-counter.module";
import { __capcp__CommonPipesModule } from "../__cp__-common-pipes/__cp__-common-pipes.module";
import { __capcp__CommonModule } from "../__cp__-common/__cp__-common.module";
import { __capcp__ThemeSwitchModule } from "../__cp__-theme-switch/__cp__-theme-switch.module";
import { __capcp__AuthAjaxService } from "../__cp__-auth/service/__cp__-auth.ajax.service";


describe('DbNavComponent', () => {
  let component: __capcp__NavComponent;
  let fixture: ComponentFixture<__capcp__NavComponent>;
  let router: Router;
  let service = __capcp__AuthAjaxService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        __capcp__NavComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        NoopAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        __capcp__LogoModule,
        __capcp__FooterModule,
        __capcp__CounterModule,
        __capcp__CommonPipesModule,
        __capcp__CommonModule,
        __capcp__ThemeSwitchModule,

        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        __capcp__AuthAjaxService
      ]
    }).compileComponents();
    router = TestBed.get(Router);
    service = TestBed.get(__capcp__AuthAjaxService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(__capcp__NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
