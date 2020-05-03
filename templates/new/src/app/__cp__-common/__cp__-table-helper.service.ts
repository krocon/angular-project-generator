import { Injectable } from '@angular/core';

@Injectable()
export class __capcp__TableHelperService {

  static get2Digits(n: number): string {
    if (n < 10) {
      return '0' + n;
    }
    return '' + n;
  }

  static dateStringCellRenderer(params): string {
    if (!params.value) {
      return '';
    }
    // 2018-04-16T17:23:43
    const st = params.value + '';

    try {
      const da = new Date(st);
      const year = da.getFullYear();
      const month = da.getMonth() + 1;
      const day = da.getDate();
      const hour = da.getHours();
      const minute = da.getMinutes();
      const second = da.getSeconds();

      const d = __capcp__TableHelperService.get2Digits(day);
      const m = __capcp__TableHelperService.get2Digits(month);
      const h = __capcp__TableHelperService.get2Digits(hour);
      const mi = __capcp__TableHelperService.get2Digits(minute);
      const s = __capcp__TableHelperService.get2Digits(second);
      return `<b>${d}.${m} ${year}</b> ${h}:${mi}<small>:${s}</small>`;
    } catch (e) {
      return st;
    }
  }

  static dateStringToShortText(st: string): string {
    if (!st) {
      return '';
    }
    try {
      const da = new Date(st);
      const year = da.getFullYear();
      const month = da.getMonth() + 1;
      const day = da.getDate();

      const d = __capcp__TableHelperService.get2Digits(day);
      const m = __capcp__TableHelperService.get2Digits(month);
      return `${d}.${m} ${year}`;

    } catch (e) {
      return st;
    }
  }

  static secondsToTimeFromMidnight(secs: number): string {
    if (secs === null) {
      return '';
    }
    try {
      const d = new Date(secs * 1000);

      const hour = d.getUTCHours();
      const minute = d.getUTCMinutes();
      const second = d.getUTCSeconds();

      const h = __capcp__TableHelperService.get2Digits(hour);
      const mi = __capcp__TableHelperService.get2Digits(minute);
      const s = __capcp__TableHelperService.get2Digits(second);

      return `${h}:${mi}<small>:${s}</small>`;
    } catch (e) {
      console.error(e);
      return '';
    }
  }

}
