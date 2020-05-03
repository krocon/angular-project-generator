const backendUrl = '../service'; // TODO set service url

export const environment = {
  production: true,
  env: 'prod',
  version: '{BUILD_VERSION}',
  commitHash: 'd73a26c',
  showVersionIndicator: false,
  routerTracing: false,

  loginRoute: '/anmelden',
  logoutRoute: '/abmelden',
  welcomeRoute: '/willkommen',

  authServiceConfig: {
    mock: false,
    loginUrl: 'assets/mock-data/auth/login.json',
    logoutUrl: 'assets/mock-data/auth/logout.json',
    logoutMock: true,
  },

  // TODO delete:
  TODO_delete: {
    getUrl: `${backendUrl}/__entity__`,
    getAllUrl: `${backendUrl}/__entity__`,
    deleteUrl: `${backendUrl}/__entity__`,
    postUrl: `${backendUrl}/__entity__`,
    putUrl: `${backendUrl}/__entity__`
  }

};
