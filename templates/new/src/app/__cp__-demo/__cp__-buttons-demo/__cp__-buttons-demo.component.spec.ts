import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { __capcp__ButtonsDemoComponent } from './__cp__-buttons-demo.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { __capcp__ButtonsDemoModule } from './__cp__-buttons-demo.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('__capcp__ButtonsDemoComponent', () => {
  let component: __capcp__ButtonsDemoComponent;
  let fixture: ComponentFixture<__capcp__ButtonsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        __capcp__ButtonsDemoModule,
        NoopAnimationsModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(__capcp__ButtonsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
