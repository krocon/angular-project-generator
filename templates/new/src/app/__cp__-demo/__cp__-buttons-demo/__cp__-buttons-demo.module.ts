import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capcp__ButtonsDemoComponent } from './__cp__-buttons-demo.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    __capcp__ButtonsDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'buttons',
        component: __capcp__ButtonsDemoComponent,
      }
    ]),
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    __capcp__ButtonsDemoComponent
  ]
})
export class __capcp__ButtonsDemoModule {
}
