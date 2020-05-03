import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-__cp__-label-value',
  template: `
    <div class="mat-dialog-actions-div-col-1">
      <div class="mat-form-field-infix __cp__-left">
        <input
          class="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
          [value]="value"
          name="xxx"
          placeholder="{{label}}"
          readonly="readonly"
          aria-invalid="false"
          aria-required="false">
        <span class="mat-form-field-label-wrapper mat-form-field-can-float mat-form-field-should-float">
          <label class="mat-form-field-label ng-star-inserted">{{label}}</label>
        </span>
      </div>
    </div>
  `,
  styles: [`
      .mat-input-element {
          font-size: 14px;
      }
  `]
})
export class __capcp__LabelValueReadonlyComponent {

  @Input()
  label: string;

  @Input()
  value: string;


}

