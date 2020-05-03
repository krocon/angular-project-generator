import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { __capcp____pascalentity__AjaxService } from "./__cp__-__kebabentity__-ajax.service";
import { __capcp____pascalentity__DataIf } from "../data/__cp__-__kebabentity__.data.if";

@Injectable({
  providedIn: 'root',
})
export class __capcp____pascalentity__Service {

  constructor(
    private readonly ajaxService: __capcp____pascalentity__AjaxService
  ) {
  }

  getById(id: any): Observable<__capcp____pascalentity__DataIf> {
    return this.ajaxService.getById(id);
  }

  getAll(): Observable<__capcp____pascalentity__DataIf[]> {
    return this.ajaxService.getAll();
  }

  insert(o: __capcp____pascalentity__DataIf): Observable<__capcp____pascalentity__DataIf> {
    return this.ajaxService.post(o);
  }

  update(o: __capcp____pascalentity__DataIf): Observable<__capcp____pascalentity__DataIf> {
    return this.ajaxService.put(o);
  }

  delete(id: any): Observable<__capcp____pascalentity__DataIf> {
    return this.ajaxService.delete(id);
  }

}
