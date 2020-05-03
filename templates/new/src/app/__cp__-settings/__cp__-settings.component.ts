import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { __capcp__SettingsService } from './service/__cp__-settings.service';
import { Router } from '@angular/router';
import { __capcp__SettingsData } from './data/settings.data';


@Component({
  selector: 'app-__cp__-settings',
  templateUrl: '__cp__-settings.component.html',
  styleUrls: ['__cp__-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class __capcp__SettingsComponent implements OnInit, OnDestroy {

  public data: __capcp__SettingsData = new __capcp__SettingsData();
  private alive = true;

  constructor(
    private readonly service: __capcp__SettingsService,
    private readonly router: Router,
  ) {
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit(): void {
    this.data = this.service.getSettingsFromStorage();
  }

  go2Welcome() {
    this.router.navigate(['/willkommen']);
  }

  onOkClicked() {
    this.service.settings2storage(this.data);
    setTimeout(this.go2Welcome.bind(this), 666);
  }

  onCancelClicked() {
    setTimeout(this.go2Welcome.bind(this), 1);
  }

}
