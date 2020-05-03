// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// @ts-ignore
import pkg from '../../package.json';

export const environment = {
  production: false,
  env: 'dev',
  version: pkg.version,
  commitHash: '-',
  showVersionIndicator: true,
  routerTracing: false,

  loginRoute: '/anmelden', // login
  logoutRoute: '/abmelden', // logout
  welcomeRoute: '/willkommen', // welcome or home

  authServiceConfig: {
    mock: false,
    loginUrl: 'assets/mock-data/auth/login.json',
    logoutUrl: 'assets/mock-data/auth/logout.json',
    logoutMock: true,
  },

  // TODO delete:
  TODO_delete: {
    getUrl: 'assets/mock-data/__kebabentity__/get.json',
    getAllUrl: 'assets/mock-data/__kebabentity__/getall.json',
    deleteUrl: 'assets/mock-data/__kebabentity__/delete.json',
    postUrl: 'assets/mock-data/__kebabentity__/post.json',
    putUrl: 'assets/mock-data/__kebabentity__/put.json'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
