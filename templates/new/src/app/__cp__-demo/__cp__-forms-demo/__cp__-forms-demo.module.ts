import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capcp__FormsDemoComponent } from './__cp__-forms-demo.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
  declarations: [
    __capcp__FormsDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    FlexModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'forms',
        component: __capcp__FormsDemoComponent,
      }
    ]),
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatProgressBarModule,
    MatSliderModule
  ],
  providers: [
    __capcp__FormsDemoComponent
  ]
})

export class __capcp__FormsDemoModule {
}
