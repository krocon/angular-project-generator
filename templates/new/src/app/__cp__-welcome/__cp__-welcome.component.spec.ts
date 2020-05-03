import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { __capcp__WelcomeComponent } from "./__cp__-welcome.component";

describe('__capcp__WelcomeComponent', () => {
  let component: __capcp__WelcomeComponent;
  let fixture: ComponentFixture<__capcp__WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [__capcp__WelcomeComponent]
    })
      .compileComponents();
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
