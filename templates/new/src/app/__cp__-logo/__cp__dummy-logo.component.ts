import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-__cp__-logo',
  template: `
    <svg
      [attr.height]="_height"
      [attr.width]="_width"
      viewBox="0 0 140 160">
      <path class="st0" d="M68.74,136.99l-0.6,0.34 M119.74,87.93v-0.8"/>
      <polygon class="st0" points="137.45,77.7 136.14,117.03 68.74,156.63 68.74,136.99 119.74,107.55 119.74,87.92 "/>
      <line class="st1" x1="98.95" y1="95.12" x2="98.95" y2="95.12"/>
      <line class="st1" x1="102.74" y1="58.48" x2="86.43" y2="67.89"/>
      <line class="st1" x1="137.45" y1="77.69" x2="102.74" y2="58.48"/>
      <line class="st1" x1="68.74" y1="117.37" x2="102.17" y2="97.74"/>
      <line class="st1" x1="34.74" y1="97.74" x2="68.74" y2="117.37"/>
      <line class="st1" x1="69.92" y1="0.52" x2="0.74" y2="38.73"/>
      <line class="st1" x1="103.44" y1="19.48" x2="69.92" y2="0.94"/>
      <polygon class="st2" points="85.89,29.11 85.74,48.65 69.34,38.49 69.18,19.13 "/>
      <path class="st3" d="M86.22,49L85.9,29.64l0.48,0.01l17.04-10.01l-0.32-0.02l-0.36,20.03l0.35-0.18l-17.34,9.81"/>
      <polyline class="st3" points="34.52,97.74 34.58,58.65 69.18,38.68 68.96,19.14 68.56,18.81 16.89,48.66 17.55,48.88 17.52,107.55 33.89,98.1 "/>
      <path class="st2" d="M119.74,87.13l0,20.43l0,0l-17.57-9.81l-15.83-8.84l0.09-21l33.31,20.03"/>
      <polygon class="st2"
               points="17.74,106.29 17.76,48.88 0.74,38.7 0.74,117.37 68.74,156.63 68.14,137.34 17.74,107.55 "/>
    </svg>
  `,
  styles: [`
    svg > * {
      stroke-miterlimit: 10;
    }

    .st0 {
      /*fill: #E5E5E5;*/
      fill: #ec0016;
      stroke: #1D1D1B;
    }

    .st1 {
      fill: none;
      stroke: #1D1D1B;
    }

    .st2 {
      /*fill: #AAAAAA;*/
      fill: #4020bd;
      stroke: #1D1D1B;
    }

    .st3 {
      fill: #ec0016;
      stroke: #000000;
    }
  `]
})
export class __capcp__DummyLogoComponent implements AfterViewInit {

  @Input()
  set height(value: number) {
    this._height = value;
  }

  _height = 40;
  _width = this._height;

  constructor(
    private readonly cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }
}
