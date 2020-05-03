import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: '__cp__ReplaceText'})
export class __capcp__ReplaceTextPipe implements PipeTransform {

  transform(s: string, regexp: string, replaceValue: string): string {
    if (!s) {
      return '';
    }

    try {
      return s.replace(new RegExp(regexp, 'g'), '<br>@')
    } catch (e) {
      return s;
    }
  }
}
