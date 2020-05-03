import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: '__cp__DateStringToShortText'})
export class __capcp__DateStringToShortTextPipe implements PipeTransform {

  static get2Digits(n: number): string {
    if (n < 10) {
      return '0' + n;
    }
    return '' + n;
  }

  transform(s: string): string {
    if (!s) {
      return '';
    }

    try {
      const _date = new Date(s);
      const year = _date.getFullYear();
      const month = _date.getMonth() + 1;
      const day = _date.getDate();

      const d = __capcp__DateStringToShortTextPipe.get2Digits(day);
      const m = __capcp__DateStringToShortTextPipe.get2Digits(month);
      return `${d}.${m} ${year}`;

    } catch (e) {
      return s;
    }
  }
}
