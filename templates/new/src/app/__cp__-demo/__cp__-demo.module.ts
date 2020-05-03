import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { __capcp__DemoComponent } from "./__cp__-demo.component";

const data = {
  breadcrumb: true,
  animationLevel: 3
};

const routes: Routes = [
  {
    path: '',
    component: __capcp__DemoComponent,
    data: {
      breadcrumb: true,
      animationLevel: 2
    }
  },
  {
    path: '',
    loadChildren: () => import('./__cp__-fonts-demo/__cp__-fonts-demo.module').then(m => m.__capcp__FontsDemoModule),
    data
  },
  {
    path: '',
    loadChildren: () => import('./__cp__-forms-demo/__cp__-forms-demo.module').then(m => m.__capcp__FormsDemoModule),
    data
  },
  {
    path: '',
    loadChildren: () => import('./__cp__-buttons-demo/__cp__-buttons-demo.module').then(m => m.__capcp__ButtonsDemoModule),
    data
  },
  {
    path: '',
    loadChildren: () => import('./__cp__-mix-demo/__cp__-mix-demo.module.js').then(m => m.__capcp__MixDemoModule),
    data
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FlexModule,
    MatButtonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    __capcp__DemoComponent
  ]
})
export class __capcp__DemoModule {
}
