import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { __capcp__ColorDemoDeutscheBahnComponent } from './__cp__-color-demo-deutsche-bahn.component';
import { __capcp__ColorSquareComponent } from "./__cp__-color-square.component";
import { __capcp__ColorSquarePrimaryComponent } from "./__cp__-color-square-primary.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { __capcp__ColorDemoDeutscheBankComponent } from "./__cp__-color-demo-deutsche-bank.component";

@NgModule({
    declarations: [
      __capcp__ColorDemoDeutscheBahnComponent,
      __capcp__ColorDemoDeutscheBankComponent,
      __capcp__ColorSquareComponent,
      __capcp__ColorSquarePrimaryComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    FlexModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'colordeutschebahn',
        component: __capcp__ColorDemoDeutscheBahnComponent
      }
    ]),
    RouterModule.forChild([
      {
        path: 'colordeutschebank',
        component: __capcp__ColorDemoDeutscheBankComponent
      }
    ]),
    MatButtonModule,
    MatTooltipModule,
  ],
  providers: [
    __capcp__ColorDemoDeutscheBahnComponent,
    __capcp__ColorDemoDeutscheBankComponent
  ]
})
export class __capcp__ColorDemoModule {
}
