import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';


@Component({
  selector: 'app-__cp__-countdown',
  template: '<div #cmp></div>',
  styles: [`
    div {
      display: inline-block;
      font-variant-numeric: slashed-zero;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class __capcp__CountdownComponent implements OnDestroy, AfterViewInit {


  @Input() startTimeInMillis: number;
  @Input() diffTimeInMillis: number = 15 * 60 * 1000;
  @Output() readonly timeout = new EventEmitter();
  @ViewChild('cmp', {static: true}) private readonly div: ElementRef<HTMLElement>;

  private alive = true;


  constructor(
    private readonly ngZone: NgZone,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.cdr.detach();
  }

  private static pad(value) {
    const n = Math.floor(value);
    if (n < 10) {
      return '0' + n;
    }
    return n;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  ngAfterViewInit(): void {
    this.startTimeInMillis = Date.now();

    // Der erste Aufruf (, später rekursiv):
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(this.updateText.bind(this));
    });
  }

  private updateText(): void {
    if (!this.alive) {
      return; // skip
    }
    const now = Date.now();
    const remainingInMillis = this.startTimeInMillis + this.diffTimeInMillis - now;
    const seconds = __capcp__CountdownComponent.pad((remainingInMillis / 1000) % 60);
    const minutes = __capcp__CountdownComponent.pad((remainingInMillis / 1000 / 60) % 60);
    // const hours = this.pad((total / (1000 * 60 * 60)) % 24);
    // const days = this.pad(total / (1000 * 60 * 60 * 24));

    // update GUI:
    this.div.nativeElement.innerText = `${minutes}:${seconds}`;

    if (remainingInMillis >= 1000) {
      setTimeout(() => {
        requestAnimationFrame(this.updateText.bind(this));
      }, 200);
    } else {
      this.timeout.emit(now);
    }
  }

}
