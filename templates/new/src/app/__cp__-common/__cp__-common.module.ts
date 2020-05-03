import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { __capcp__VersionIndicatorComponent } from "./__cp__-version-indicator.component";
import { __capcp__LabelValueReadonlyComponent } from "./__cp__-label-value-readonly.component";
import { __capcp__MetaService } from "./__cp__-meta.service";
import { __capcp__TableHelperService } from "./__cp__-table-helper.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  declarations: [
    __capcp__VersionIndicatorComponent,
    __capcp__LabelValueReadonlyComponent
  ],
  exports: [
    __capcp__VersionIndicatorComponent,
    __capcp__LabelValueReadonlyComponent
  ],
  providers: [
    __capcp__MetaService,
    __capcp__TableHelperService
  ]
})
export class __capcp__CommonModule {
}

