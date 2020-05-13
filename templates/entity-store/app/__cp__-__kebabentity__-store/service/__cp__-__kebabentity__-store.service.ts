import { Injectable } from '@angular/core';
import { __capcp__TypedDataService } from '../../__cp__-common/__cp__-typed-data-service';
import { __capcp____pascalentity__Data } from '../data/__cp__-__kebabentity__.data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class __capcp____pascalentity__StoreService {
  private static readonly innerService = new __capcp__TypedDataService<__capcp____pascalentity__Data>(
    '__kebabentity__', // key in localstorage
    new __capcp____pascalentity__Data() // default-value
  );

  get valueChanges$(): Observable<__capcp____pascalentity__Data> {
    return __capcp____pascalentity__StoreService.innerService.valueChanges$;
  }

  getValue(): __capcp____pascalentity__Data {
    return __capcp____pascalentity__StoreService.innerService.getValue();
  }

  update(o: __capcp____pascalentity__Data): void {
    __capcp____pascalentity__StoreService.innerService.update(o);
  }
}
