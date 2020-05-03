import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { __capcp__FontsDemoComponent } from './__cp__-fonts-demo.component';
import { __capcp__FontsDemoModule } from './__cp__-fonts-demo.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('__capcp__FontsDemoComponent', () => {
  let component: __capcp__FontsDemoComponent;
  let fixture: ComponentFixture<__capcp__FontsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        __capcp__FontsDemoModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(__capcp__FontsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
