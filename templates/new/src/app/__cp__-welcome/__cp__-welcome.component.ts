import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map, shareReplay, takeWhile } from "rxjs/operators";

@Component({
  selector: 'app-__cp__-welcome',
  templateUrl: './__cp__-welcome.component.html',
  styleUrls: ['./__cp__-welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class __capcp__WelcomeComponent implements OnDestroy {

  public environment = environment;

  bgImageVisible = false;
  textAsOverlay = true;
  alive = true;


  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
  }

  isSmall$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.Handset])
    .pipe(
      takeWhile(() => this.alive),
      map(result => result.matches),
      shareReplay()
    );

  ngOnDestroy(): void {
    this.alive = false;
  }
}
