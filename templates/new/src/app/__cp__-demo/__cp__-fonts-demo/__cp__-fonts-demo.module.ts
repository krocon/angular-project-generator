import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capcp__FontsDemoComponent } from './__cp__-fonts-demo.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    __capcp__FontsDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'fonts',
        component: __capcp__FontsDemoComponent,
      }
    ]),
  ],
  providers: [
    __capcp__FontsDemoComponent
  ]
})
export class __capcp__FontsDemoModule {
}
