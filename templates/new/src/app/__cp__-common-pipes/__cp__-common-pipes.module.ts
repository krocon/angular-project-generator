import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capcp__DateStringToTextPipe } from "./__cp__-date-string-to-text.pipe";
import { __capcp__DateStringToShortTextPipe } from "./__cp__-date-string-to-short-text.pipe";
import { __capcp__DateStringToHtmlPipe } from "./__cp__-date-string-to-html.pipe";
import { __capcp__ReplaceTextPipe } from "./__cp__-replace-text.pipe";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    __capcp__DateStringToTextPipe,
    __capcp__DateStringToShortTextPipe,
    __capcp__DateStringToHtmlPipe,
    __capcp__ReplaceTextPipe,
  ],
  exports: [
    __capcp__DateStringToTextPipe,
    __capcp__DateStringToShortTextPipe,
    __capcp__DateStringToHtmlPipe,
    __capcp__ReplaceTextPipe,
  ]
})
export class __capcp__CommonPipesModule {
}

