import { NgModule } from '@angular/core';
import { __capcp__DummyLogoComponent } from './__cp__-dummy-logo.component';
import { __capcp__DeutscheBahnLogoComponent } from './__cp__-deutsche-bahn-logo.component';
import { __capcp__DeutscheBankLogoComponent } from './__cp__-deutsche-bank-logo.component';
import { __capcp__LufthansaLogoComponent } from './__cp__-lufthansa-logo.component';

// TODO a) enable or insert your logo component. b) delete other logo components.

@NgModule({
  imports: [],
  declarations: [
    __capcp__DummyLogoComponent,
    __capcp__DeutscheBahnLogoComponent,
    __capcp__DeutscheBankLogoComponent,
    __capcp__LufthansaLogoComponent
  ],
  exports: [
    __capcp__DummyLogoComponent
    // __capcp__DeutscheBahnLogoComponent,
    // __capcp__DeutscheBankLogoComponent,
    // __capcp__LufthansaLogoComponent
  ]
})
export class __capcp__LogoModule {
}
