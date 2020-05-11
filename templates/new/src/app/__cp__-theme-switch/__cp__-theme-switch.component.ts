import { ChangeDetectionStrategy, Component } from '@angular/core';
import { __capcp__ThemeSwitchService } from './service/__cp__-theme-switch.service';

@Component({
  selector: 'app-__cp__-theme-switch',
  templateUrl: './__cp__-theme-switch.component.html',
  styleUrls: ['./__cp__-theme-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class __capcp__ThemeSwitchComponent {
  constructor(
    private readonly themeSwitchService: __capcp__ThemeSwitchService
  ) {}

  onToggleClicked() {
    this.themeSwitchService.toggle();
  }
}
