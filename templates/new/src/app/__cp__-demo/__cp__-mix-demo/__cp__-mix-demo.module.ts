import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capcp__MixDemoComponent } from './__cp__-mix-demo.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    __capcp__MixDemoComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        FlexModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: 'mix',
                component: __capcp__MixDemoComponent,
            }
        ]),
        MatButtonModule
    ],
  providers: [
    __capcp__MixDemoComponent
  ]
})
export class __capcp__MixDemoModule {
}
