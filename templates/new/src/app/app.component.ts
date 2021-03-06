import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../environments/environment';
import { __capcp__NavComponent } from './__cp__-nav/__cp__-nav.component';
import { __capcp__AuthAjaxService } from './__cp__-auth/service/__cp__-auth.ajax.service';
import { __capcp__AuthGuardCanActivate } from './__cp__-auth/__cp__-auth-guard-can-activate';

// import { __capcp____pascalentity__AjaxService } from "./__cp__-__kebabentity__-service/service/__cp__-__kebabentity__-ajax.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   animationLeftRight
  // ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor() {
    __capcp__NavComponent.forRoot({
      routeTitles: {
        home: 'Welcome!',
        login: 'Login',
        demofonts: 'Demos / Fonts',
        demobuttons: 'Demos / Buttons',
        demoforms: 'Demos / Forms',
        demomix: 'Demos / CSS Utils',
        demo: 'Demos',
        logout: 'Logout',
        setup: 'Setup',
        impressum: 'Imprint, Contact & Support',
        nutzungsbedingungen: 'Conditions of Use',
        datenschutz: 'Privacy Notice'
      },
      logoutCounterVisible: true,
      menuIconsVisible: true,
      titleFadeIn: true
    });

    __capcp__AuthGuardCanActivate.forRoot({
      loginRoute: environment.loginRoute
    });

    __capcp__AuthAjaxService.forRoot(environment.authServiceConfig);

    // __capcp____pascalentity__AjaxService.forRoot(environment.__cp____pascalentity__Config);

    // __capcp__ThemeSwitchService.forRoot({
    //     themes: ['light', 'dark']
    //   });
  }

  // captureStartEvent(event: AnimationEvent) {
  //   console.info('animation start event:', event); // TODO delete
  // }
  //
  // captureDoneEvent(event: AnimationEvent) {
  //   let from = event['fromState'];
  //   let to = event['toState'];
  //   console.info('animation done: ', `${from} => ${to}`); // TODO delete
  // }
  //
  //
  // prepareRoute(outlet: RouterOutlet): boolean {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationLevel'];
  // }
}
