import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-__cp__-color-primary-square',
  template: `
    <div class="square-div"
         #div
         [matTooltip]="title"
         (mouseenter)="onMouseenter()"
         [class]="bgClass"
         [ngClass]="{white: textWhite}">
      <small [innerText]="scssVariable"></small>
      <br>
      <br>
      <div [innerText]="bgClass"></div>
    </div>
    <div class="text-div" [class]="colorClass" [innerText]="colorClass"></div>
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
export class __capcp__ColorSquarePrimaryComponent {

  @ViewChild('div', {static: false}) div : ElementRef;
  @Input() scssVariable: string;
  @Input() colorClass: string;
  @Input() bgClass: string;
  @Input() textWhite = true;
  title = '';

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

