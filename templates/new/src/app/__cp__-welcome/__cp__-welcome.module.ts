import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { __capcp__WelcomeComponent } from "./__cp__-welcome.component";
import { ExtendedModule, FlexLayoutModule, FlexModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    __capcp__WelcomeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: __capcp__WelcomeComponent
      }
    ]),
    ExtendedModule,
    FlexModule,
    FlexLayoutModule,
  ]
})
export class __capcp__WelcomeModule {
}
