import {
  AfterContentInit,
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

const BASE_TIMER_DELAY = 50;

@Directive({
  selector: '[app__capcp__Autofocus]'
})
export class __capcp__AutofocusDirective implements AfterContentInit, OnChanges, OnDestroy {


  @Input('app__capcp__AutofocusDelay')
  public timerDelay: number | string = BASE_TIMER_DELAY;

  private timeout: any = null;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly ngZone: NgZone,
  ) {
  }

  private _condition = false;

  @Input('app__capcp__Autofocus')
  set condition(value: string | boolean) {
    this._condition = typeof value === 'boolean' ? value : (value === 'true');
  }

  public ngAfterContentInit(): void {
    if (this._condition) {
      this.startFocusWorkflow();
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.timerDelay && (typeof (this.timerDelay) !== 'number')) {
      if (isNaN(this.timerDelay = +this.timerDelay)) {
        this.timerDelay = BASE_TIMER_DELAY;
      }
    }
    if (this._condition) {
      this.startFocusWorkflow();
    } else {
      this.stopFocusWorkflow();
    }
  }


  public ngOnDestroy(): void {
    this.stopFocusWorkflow();
  }

  private startFocusWorkflow(): void {
    if (this.timeout) {
      return; // skip
    }
    this.ngZone.runOutsideAngular(() => {
      if (this._condition) {
        this.timeout = setTimeout(
          () => {
            this.timeout = null;
            this.elementRef.nativeElement.focus();
          }, this.timerDelay as number);
      }
    });
  }


  private stopFocusWorkflow(): void {
    clearTimeout(this.timeout);
    this.timeout = null;
  }

}
