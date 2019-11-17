import { Environment } from './interface';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
  apiKey: 'AIzaSyDbl2qVoMwLROahQ0ijIMPVlP9F6F7nURE',
  fireDbUrl: 'https://blog-14eb6.firebaseio.com/',
  authDomain: 'blog-14eb6.firebaseapp.com',
  databaseURL: 'https://blog-14eb6.firebaseio.com',
  projectId: 'blog-14eb6',
  storageBucket: 'blog-14eb6.appspot.com',
  messagingSenderId: '942121472916',
  appId: '1:942121472916:web:20f3350a329a82095f3581'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
