import { Injectable } from '@angular/core';
import { __capcp__SettingsData } from '../data/settings.data';
import { __capcp__TypedDataService } from "../../__cp__-common/__cp__-typed-data-service";


@Injectable({
  providedIn: 'root',
})
export class __capcp__SettingsService {

  private static readonly innerService =
    new __capcp__TypedDataService<__capcp__SettingsData>(
      'settings', new __capcp__SettingsData());

  get settings$() {
    return __capcp__SettingsService.innerService.valueChanges$;
  }

  getSettingsFromStorage(): __capcp__SettingsData {
    return __capcp__SettingsService.innerService.getValue();
  }

  settings2storage(data: __capcp__SettingsData): void {
    __capcp__SettingsService.innerService.update(data);
  }

  private deleteSettingsFromStorage(): void {
    __capcp__SettingsService.innerService.update(null);
  }

}
