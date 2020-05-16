import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-__cp__-color-square',
  template: `
  <div class="square-div"
       #div
       [matTooltip]="title"
       (mouseenter)="onMouseenter()"
       [class]="bgClass"
       [ngClass]="{white:x>2|| y<3}">
    <small [innerText]="scssVariable" title="SCSS variable"></small>
    <br>
    <br>
    <div [innerText]="bgClass" title="CSS background class"></div>
  </div>
  <div class="text-div" [class]="colorClass" [innerText]="colorClass" title="CSS text color class"></div>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
    .square-div {
      padding: 4px 20px 4px 4px;
      min-height: 70px;
      min-width: 100px;
    }
    .square-div > * {
      display: block;
      color: #000;
    }
    .square-div.white > * {
      color: #fff;
    }
    .text-div {
      padding-left: 4px
    }
  `]
})
export class __capcp__ColorSquareComponent {

  @Input() x;
  @Input() y;
  @ViewChild('div', {static: false}) div : ElementRef;
  title = '';

  get scssVariable() {
    return `$db-${this.nn(this.y)}-${this.nn(this.x)}`;
  }

  get colorClass() {
    return `db-color-${this.nn(this.y)}-${this.nn(this.x)}`;
  }
  get bgClass() {
    return `db-bg-${this.nn(this.y)}-${this.nn(this.x)}`;
  }

  nn(n:number): string {
    if (n<10) return '0' + n;
    return ''+n;
  }

  onMouseenter() {
    let rgbStr = window.getComputedStyle(this.div.nativeElement, null)['background-color'];
    const rgb = this.rgbString2Arr(rgbStr);
    const hex = this.toHex(rgb);
    this.title = rgbStr + ',  hex: ' + hex;
  }

  private rgbString2Arr(s: string): number[] {
    return s
      .replace(/rgb\(/g, '')
      .replace(/\)/g, '')
      .split(',')
      .map(s=> parseInt(s));
  }

  private toHex(rgb: number[]) {
    return "#" + this.hex(rgb[0]) + this.hex(rgb[1]) + this.hex(rgb[2]);
  }

  private hex(x: number): string {
    return ("0" + x.toString(16)).slice(-2);
  }
}

