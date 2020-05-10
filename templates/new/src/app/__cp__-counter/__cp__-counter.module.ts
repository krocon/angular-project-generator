import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capcp__CountdownComponent } from './__cp__-countdown.component';
import { __capcp__CountupComponent } from './__cp__-countup.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    __capcp__CountdownComponent,
    __capcp__CountupComponent
  ],
  exports: [
    __capcp__CountdownComponent,
    __capcp__CountupComponent
  ]
})
export class __capcp__CounterModule {
}
