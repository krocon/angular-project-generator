import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { __capcp____pascalentity__DataIf } from "../data/__cp__-__kebabentity__.data.if";

@Injectable({
  providedIn: 'root',
})
export class __capcp____pascalentity__AjaxService {

  // TODO see url definitions (__cp____pascalentity__Config) in environment.ts and environment.prod.ts
  // see app.component.ts: __capcp____pascalentity__AjaxService.forRoot(environment.__cp____pascalentity__Config);

  private static readonly config = {
    getUrl: 'assets/mock-data/__kebabentity__/get.json',
    getAllUrl: 'assets/mock-data/__kebabentity__/getall.json',
    deleteUrl: 'assets/mock-data/__kebabentity__/delete.json',
    postUrl: 'assets/mock-data/__kebabentity__/post.json',
    putUrl: 'assets/mock-data/__kebabentity__/put.json'
  };

  constructor(
    private readonly http: HttpClient
  ) {
  }

  static forRoot(config) {
    Object.assign(this.config, config);
  }

  getById(id: any): Observable<__capcp____pascalentity__DataIf> {
    let url = __capcp____pascalentity__AjaxService.config.getUrl;
    if (url.indexOf('mock-data') > -1) {
      return this.http.get<__capcp____pascalentity__DataIf>(url);
    }
    url = url.replace(/:id/g, id);
    return this.http.get<__capcp____pascalentity__DataIf>(url);
  }

  getAll(): Observable<__capcp____pascalentity__DataIf[]> {
    let url = __capcp____pascalentity__AjaxService.config.getAllUrl;
    if (url.indexOf('mock-data') > -1) {
      return this.http.get<__capcp____pascalentity__DataIf[]>(url);
    }
    return this.http.get<__capcp____pascalentity__DataIf[]>(url);
  }

  post(o: __capcp____pascalentity__DataIf): Observable<__capcp____pascalentity__DataIf> {
    let url = __capcp____pascalentity__AjaxService.config.postUrl;
    if (url.indexOf('mock-data') > -1) {
      return this.http.get<__capcp____pascalentity__DataIf>(url);
    }
    return this.http.post<__capcp____pascalentity__DataIf>(url, o);
  }

  put(o: __capcp____pascalentity__DataIf): Observable<__capcp____pascalentity__DataIf> {
    let url = __capcp____pascalentity__AjaxService.config.putUrl;
    if (url.indexOf('mock-data') > -1) {
      return this.http.get<__capcp____pascalentity__DataIf>(url);
    }
    return this.http.put<__capcp____pascalentity__DataIf>(url, o);
  }

  delete(id: any): Observable<__capcp____pascalentity__DataIf> {
    let url = __capcp____pascalentity__AjaxService.config.deleteUrl;
    if (url.indexOf('mock-data') > -1) {
      return this.http.get<__capcp____pascalentity__DataIf>(url);
    }
    url = url.replace(/:id/g, id);
    return this.http.delete<__capcp____pascalentity__DataIf>(url);
  }

}

