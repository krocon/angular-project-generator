import { Inject, Injectable } from '@angular/core';
import { __capcp__TypedDataService } from '../../__cp__-common/__cp__-typed-data-service';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class __capcp__ThemeSwitchService {
  private static readonly config = {
    themes: ['light', 'dark'],
  };

  private static readonly innerService = new __capcp__TypedDataService<string>(
    'theme', // key in localstorage
    window?.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light' // very first default value
  );

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    const theme = this.getValue();
    this.updateTheme(theme);
  }

  get themes() {
    return __capcp__ThemeSwitchService.config.themes;
  }

  get valueChanges$(): Observable<string> {
    return __capcp__ThemeSwitchService.innerService.valueChanges$;
  }

  static forRoot(config) {
    Object.assign(this.config, config);
  }

  getValue(): string {
    return __capcp__ThemeSwitchService.innerService.getValue();
  }

  toggle(): string {
    const arr = this.themes;
    if (!arr.length) return;

    const v = __capcp__ThemeSwitchService.innerService.getValue();
    __capcp__ThemeSwitchService.innerService.update(
      v === arr[0] ? arr[1] : arr[0]
    );

    let value = this.getValue();
    this.updateTheme(value);
    return value;
  }

  private updateTheme(theme) {
    for (const th of this.themes) {
      this.document.body.classList.remove(th);
    }
    this.document.body.classList.add(theme);
  }
}
