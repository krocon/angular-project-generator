import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, takeWhile } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from "@angular/router";
import { MatSidenav, MatSidenavContent } from "@angular/material/sidenav";
import { environment } from "../../environments/environment";
import { __capcp__AuthService } from "../__cp__-auth/service/__cp__-auth.service";
import { LoginResponseData } from "../__cp__-auth/data/login.response.data";

@Component({
  selector: 'app-__cp__-nav',
  templateUrl: './__cp__-nav.component.html',
  styleUrls: ['./__cp__-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class __capcp__NavComponent implements OnInit, OnDestroy {

  private static readonly config = {
    routeTitles: {
      home: 'Herzlich willkommen!'
    },

    loginRoute: '/anmelden',
    logoutRoute: '/abmelden',
    welcomeRoute: '/willkommen',

    menuIconsVisible: true,
    logoutCounterVisible: true,
    titleFadeIn: true
  };

  @ViewChild('drawer', {static: true}) mainNav: MatSidenav;
  @ViewChild('matSidenavContent', {static: true}) matSidenavContent: MatSidenavContent;

  lastClickInMillis = Date.now();
  version = environment.version;
  commitHash = environment.commitHash;
  loggedIn = false;
  data: LoginResponseData = null;
  title = 'Herzlich willkommen!';
  fadein = true;

  private alive = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      takeWhile(() => this.alive),
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly authService: __capcp__AuthService,
    private readonly cdr: ChangeDetectorRef
  ) {
  }

  get cfg() {
    return __capcp__NavComponent.config;
  }

  get menuIconsVisible() {
    return __capcp__NavComponent.config.menuIconsVisible;
  }

  get logoutCounterVisible() {
    return __capcp__NavComponent.config.logoutCounterVisible;
  }

  static forRoot(config) {
    Object.assign(this.config, config);
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:click', ['$event'])
  onResize(_) {
    this.lastClickInMillis = Date.now();
  }

  ngOnInit() {
    this.calcTitle(this.router.url);

    this.router
      .events
      .pipe(takeWhile(() => this.alive))
      .subscribe(evt => {
        if (evt instanceof NavigationStart) {
          this.fadein = false;
          this.cdr.detectChanges();

        } else if (evt instanceof NavigationEnd) {
          // console.info(evt);
          // console.info(this.activatedRoute);
          // console.info(this.activatedRoute.firstChild);
          this.matSidenavContent.scrollTo({top: 0, left: 0});
          let url = evt.url;
          this.calcTitle(url);
        }
      });
    this.authService
      .valueChanges$
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.loggedIn = !!data.token;
        this.data = data;
        this.cdr.detectChanges();
      });
  }

  calcTitle(url: string) {
    url = url.replace(/\//g, '');
    // console.info('key', url); TODO weg
    const routeTitles = __capcp__NavComponent.config.routeTitles;
    const keys = Object.keys(routeTitles);
    for (const key of keys) {
      if (url.indexOf(key) > -1) {
        this.setTitle(routeTitles[key]);
        return;
      }
    }
    this.setTitle('Herzlich willkommen!');
  }

  setTitle(title: string) {
    this.title = title;
    this.fadein = __capcp__NavComponent.config.titleFadeIn;
    this.cdr.detectChanges();
  }

  onSessionTimeout() {
    console.warn('on session timeout...');
    this.authService.logout();
  }

}
