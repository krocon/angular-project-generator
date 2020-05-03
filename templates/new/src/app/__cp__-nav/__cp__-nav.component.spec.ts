import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { __capcp__NavComponent } from './__cp__-nav.component';
import { AppRoutingModule } from "../app-routing.module";
import { __capcp__AuthModule } from "../__cp__-auth/__cp__-auth.module";
import { __capcp__CommonPipesModule } from "../__cp__-common-pipes/__cp__-common-pipes.module";
import { __capcp__LogoModule } from "../__cp__-logo/__cp__-logo.module";
import { __capcp__FooterModule } from "../__cp__-footer/__cp__-footer.module";
import { __capcp__CounterModule } from "../__cp__-count/__cp__-counter.module";
import { __capcp__CommonModule } from "../__cp__-common/__cp__-common.module";

describe('DbNavComponent', () => {
  let component: __capcp__NavComponent;
  let fixture: ComponentFixture<__capcp__NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [__capcp__NavComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        AppRoutingModule,
        __capcp__AuthModule,
        __capcp__LogoModule,
        __capcp__FooterModule,
        __capcp__CounterModule,
        __capcp__CommonPipesModule,
        __capcp__CommonModule
      ]
    }).compileComponents();
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
