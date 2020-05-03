import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { __capcp__FormsDemoComponent } from './__cp__-forms-demo.component';
import { __capcp__FormsDemoModule } from './__cp__-forms-demo.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('__capcp__FormsDemoComponent', () => {
  let component: __capcp__FormsDemoComponent;
  let fixture: ComponentFixture<__capcp__FormsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        __capcp__FormsDemoModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(__capcp__FormsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
