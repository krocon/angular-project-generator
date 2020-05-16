import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { __capcp__ColorDemoComponent } from './__cp__-color-demo.component';
import { __capcp__ColorDemoModule } from './__cp__-color-demo.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('__capcp__ColorDemoComponent', () => {
  let component: __capcp__ColorDemoComponent;
  let fixture: ComponentFixture<__capcp__ColorDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [__capcp__ColorDemoModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(__capcp__ColorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
