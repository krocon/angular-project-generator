import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { __capcp__ColorDemoComponent } from './__cp__-color-demo.component';
import { __capcp__ColorSquareComponent } from "./__cp__-color-square.component";
import { __capcp__ColorSquarePrimaryComponent } from "./__cp__-color-square-primary.component";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
    declarations: [
        __capcp__ColorDemoComponent,
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
        path: 'color',
        component: __capcp__ColorDemoComponent
      }
    ]),
    MatButtonModule,
    MatTooltipModule,
  ],
  providers: [
    __capcp__ColorDemoComponent
  ]
})
export class __capcp__ColorDemoModule {
}
