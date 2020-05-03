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
      viewBox="0 0 150 150"
      class="logo-path-fill-02">
      <path class="logo-path-fill-01"
            d="m 1,1 h 148 v 148 h -148 z m 21,21 v 107 h 107 v -107 z m 68,15 h 27 l -56,77 h -27 z"/>
    </svg>
  `,
  styles:[`
    .logo-path-fill-01 {
      fill: #0018A8;
      fill-rule: evenodd;
    }
    .logo-path-fill-02 {
      background: #fff;
    }
  `]
})
export class __capcp__DeutscheBankLogoComponent implements AfterViewInit {

  @Input()
  set height(value: number) {
    this._height = value;
  }

  _height = 36;
  _width = this._height;

  constructor(
    private readonly cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }
}
