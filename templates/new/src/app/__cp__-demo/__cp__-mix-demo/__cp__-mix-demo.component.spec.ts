import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { __capcp__MixDemoComponent } from './__cp__-mix-demo.component';
import { __capcp__MixDemoModule } from './__cp__-mix-demo.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('__capcp__MixDemoComponent', () => {
  let component: __capcp__MixDemoComponent;
  let fixture: ComponentFixture<__capcp__MixDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        __capcp__MixDemoModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(__capcp__MixDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
