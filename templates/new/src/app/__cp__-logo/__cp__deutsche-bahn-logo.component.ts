import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';

/**
 * https://de.wikipedia.org/wiki/Datei:Deutsche_Bahn_AG-Logo.svg
 * https://de.wikipedia.org/wiki/Deutsche_Bahn
 */
@Component({
  selector: 'app-__cp__-logo',
  template: `
    <svg
      [attr.height]="_height"
      [attr.width]="_width"
      viewBox="0 0 94.606644 66.223038">
      <g transform="translate(-17.708578,-29.543191)">
        <g transform="matrix(3.2184604,0,0,-3.2184604,-661.27392,1901.4416)">
          <g
            transform="translate(237.435,581.613)">
            <path
              d="m 0,0 h -23.516 c -1.616,0 -2.954,-1.278 -2.954,-2.93 v -14.685 c 0,-1.652 1.338,-2.961 2.954,-2.961 H 0 c 1.587,0 2.925,1.309 2.925,2.961 V -2.93 C 2.925,-1.278 1.587,0 0,0"
              class="logo-path-fill-01"/>
          </g>
          <g transform="translate(238.213,563.998)">
            <path
              d="m 0,0 c 0,-0.468 -0.31,-0.843 -0.778,-0.843 h -23.516 c -0.466,0 -0.808,0.375 -0.808,0.843 v 14.685 c 0,0.468 0.342,0.842 0.808,0.842 H -0.778 C -0.31,15.527 0,15.153 0,14.685"
              class="logo-path-fill-02"/>
          </g>
          <g transform="translate(231.961,564.59)">
            <path
              d="m 0,0 h -5.225 v 13.47 h 5.474 c 2.582,0 3.982,-1.06 3.982,-3.586 0,-1.31 -1.09,-2.245 -2.27,-2.837 C 3.609,6.581 4.729,5.58 4.729,3.899 4.729,1.155 2.426,0 0,0 m -2.022,8.138 h 1.121 c 1.057,0 1.835,0.467 1.835,1.622 0,1.278 -0.997,1.622 -2.053,1.622 H -2.022 Z M 1.306,3.962 c 0,1.371 -0.87,1.683 -2.145,1.683 H -2.022 V 2.183 h 1.152 c 1.152,0 2.176,0.375 2.176,1.779"
              class="logo-path-fill-01"/>
          </g>
          <g transform="translate(219.955,564.59)">
            <path
              d="M 0,0 H -4.946 V 13.47 H 0 c 3.484,0 5.349,-2.183 5.349,-6.672 C 5.349,2.9 4.105,0.033 0,0 m 2.147,6.518 c 0,2.712 -0.282,4.832 -3.204,4.832 H -1.712 V 2.183 h 1.151 c 1.711,0 2.708,1.372 2.708,4.335"
              class="logo-path-fill-01"/>
          </g>
        </g>
      </g>
    </svg>
  `,
  styles:[`
    .logo-path-fill-01 {
      fill:#e30613;
      fill-opacity:1;
      fill-rule:nonzero;
      stroke:none;
    }
    .logo-path-fill-02 {
      fill:#ffffff;
      fill-opacity:1;
      fill-rule:nonzero;
      stroke:none;
    }
  `]
})
export class __capcp__DeutscheBahnLogoComponent implements AfterViewInit {

  @Input()
  set height(value: number) {
    this._height = value;
  }

  _height = 66.223038 / 2;
  _width = this._height * 94.606644 / 66.223038;

  constructor(
    private readonly cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }
}
