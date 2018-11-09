// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  spotifyApi: 'https://api.spotify.com/v1/',
  clientID: 'ef7bc691c42844b592f5074c5120729e',
  clientSecret: '79c8465dc6b341c8b127e01e3046ad3b',
  redirectUri: 'http://localhost:4200/confirm',
  spotifyAccountUrl: 'https://accounts.spotify.com/'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
