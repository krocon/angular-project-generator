import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';

import { __capcp__DatenschutzComponent } from "./__cp__-datenschutz/__cp__-datenschutz.component";
import { __capcp__ImprintComponent } from "./__cp__-imprint/__cp__-imprint.component";
import { __capcp__NutzungsbedingungenComponent } from "./__cp__-nutzungsbedingungen/__cp__-nutzungsbedingungen.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    RouterModule.forChild([
      {
        path: '',
        component: __capcp__DatenschutzComponent,
        data: {animationLevel: 1}
      },
      {
        path: 'impressum',
        component: __capcp__ImprintComponent,
        data: {animationLevel: 3}
      },
      {
        path: 'nutzungsbedingungen',
        component: __capcp__NutzungsbedingungenComponent,
        data: {animationLevel: 4}
      },
      {
        path: 'datenschutz',
        component: __capcp__DatenschutzComponent,
        data: {animationLevel: 5}
      }
    ]),
    HttpClientModule,
    FlexLayoutModule
  ],
  declarations: [
    __capcp__DatenschutzComponent,
    __capcp__ImprintComponent,
    __capcp__NutzungsbedingungenComponent
  ],
  providers: []
})
export class __capcp__RechtlichesModule {
}
