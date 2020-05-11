import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { __capcp__ThemeSwitchComponent } from './__cp__-theme-switch.component';
import { __capcp__ThemeSwitchService } from './service/__cp__-theme-switch.service';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [__capcp__ThemeSwitchComponent],
  declarations: [__capcp__ThemeSwitchComponent],
  providers: [__capcp__ThemeSwitchService],
})
export class __capcp__ThemeSwitchModule {}
