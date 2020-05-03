import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { __capcp__SettingsComponent } from './__cp__-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { __capcp__SettingsService } from "./service/__cp__-settings.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: __capcp__SettingsComponent
      }
    ]),
    HttpClientModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [],
  declarations: [
    __capcp__SettingsComponent
  ],
  providers: [
    __capcp__SettingsService
  ]
})
export class __capcp__SettingsModule {

  constructor(@Optional() @SkipSelf() parentModule: __capcp__SettingsModule) {
    if (parentModule) {
      throw new Error(
        '__capcp__SettingsModule is already loaded. Import it in the AppModule only.');
    }
  }

}
