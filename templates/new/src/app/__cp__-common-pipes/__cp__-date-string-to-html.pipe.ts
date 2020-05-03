import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: '__cp__DateStringToHtml'})
export class __capcp__DateStringToHtmlPipe implements PipeTransform {

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
      const hour = _date.getHours();
      const minute = _date.getMinutes();
      const second = _date.getSeconds();

      const _day = __capcp__DateStringToHtmlPipe.get2Digits(day);
      const _month = __capcp__DateStringToHtmlPipe.get2Digits(month);
      const _hour = __capcp__DateStringToHtmlPipe.get2Digits(hour);
      const _min = __capcp__DateStringToHtmlPipe.get2Digits(minute);
      const _sec = __capcp__DateStringToHtmlPipe.get2Digits(second);

      return `<b>${_day}.${_month}.${year}</b> ${_hour}:${_min}<small>:${_sec}</small>`;

    } catch (e) {
      return s;
    }
  }

}
