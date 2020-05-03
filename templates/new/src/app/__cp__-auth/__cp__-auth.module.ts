import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { __capcp__AuthService } from './service/__cp__-auth.service';
import { __capcp__AuthAjaxService } from './service/__cp__-auth.ajax.service';
import { __capcp__AuthGuardCanActivate } from './__cp__-auth-guard-can-activate';
import { __capcp__AuthLogoutComponent } from './__cp__-logout/__cp__-auth-logout.component';
import { __capcp__ConfirmationModule } from "../__cp__-confirmation-dialog/__cp__-confirmation.module";
import { __capcp__LoginPageComponent } from "./__cp__-login/__cp__-login-page.component";
import { __capcp__AutofocusModule, } from "../__cp__-autofocus/__cp__-common.module";


const routes = [
  {path: 'anmelden', component: __capcp__LoginPageComponent},
  {path: 'abmelden', component: __capcp__AuthLogoutComponent},
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,

    __capcp__ConfirmationModule,
    __capcp__AutofocusModule,
  ],
  entryComponents: [],
  declarations: [
    __capcp__AuthLogoutComponent,
    __capcp__LoginPageComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    __capcp__AuthService,
    __capcp__AuthAjaxService,
    __capcp__AuthGuardCanActivate
  ]
})
export class __capcp__AuthModule {
}

