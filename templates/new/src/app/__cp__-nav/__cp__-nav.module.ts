import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { __capcp__NavComponent } from "./__cp__-nav.component";
import { __capcp__LogoModule } from "../__cp__-logo/__cp__-logo.module";
import { __capcp__FooterModule } from "../__cp__-footer/__cp__-footer.module";
import { __capcp__CounterModule } from "../__cp__-count/__cp__-counter.module";
import { __capcp__CommonPipesModule } from "../__cp__-common-pipes/__cp__-common-pipes.module";
import { __capcp__CommonModule } from "../__cp__-common/__cp__-common.module";


@NgModule({
  declarations: [
    __capcp__NavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    __capcp__LogoModule,
    __capcp__FooterModule,
    __capcp__CounterModule,
    __capcp__CommonPipesModule,
    __capcp__CommonModule
  ],
  exports: [
    __capcp__NavComponent
  ]
})
export class __capcp__NavModule {
}
