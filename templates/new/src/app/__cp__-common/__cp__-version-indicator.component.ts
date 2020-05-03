import { Component } from '@angular/core';
import { environment } from "../../environments/environment";


@Component({
  selector: 'app-__cp__-version-indicator',
  styles: [`
    :host {
      background: #ffdc3c;
      color: #000046;
      position: absolute;
      top: 0;
      left: 45%;
      min-width: 110px;
      height: 20px;
      z-index: 9999;
    }
    .children-hidden > span {
      display: none;
    }
  `],
  template: `
    <div *ngIf="environment?.showVersionIndicator && environment.env!=='prod'">
      <small>
        &nbsp;Version ({{environment.env}}):
        {{environment.version}}&nbsp;
        ({{environment.commitHash}})&nbsp;&nbsp;
        <span class="children-hidden">
          <span class="__cp__-display-inline-xs">xs</span>
          <span class="__cp__-display-inline-sm">sm</span>
          <span class="__cp__-display-inline-md">md</span>
          <span class="__cp__-display-inline-lg">lg</span>
          <span class="__cp__-display-inline-xl">xl</span>
        </span>
        &nbsp;
      </small>
    </div>
  `
})
export class __capcp__VersionIndicatorComponent {

  public environment = environment;

  constructor() {
    // tslint:disable:no-console
    console.info('Version >');
    console.info('        > Build Version:', environment.version);
    console.info('        > Commit Hash  :', environment.commitHash);
    console.info('        > env          :', environment.env);
    console.info('        > all          :', environment);
  }

}
