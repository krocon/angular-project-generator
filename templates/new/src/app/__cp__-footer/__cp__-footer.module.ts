import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capcp__FooterComponent } from './__cp__-footer.component';
import { RouterModule } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [__capcp__FooterComponent],
  imports: [CommonModule, RouterModule, FlexModule, MatDividerModule],
  exports: [__capcp__FooterComponent]
})
export class __capcp__FooterModule {
}
