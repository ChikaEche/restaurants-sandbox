// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDJEhfOF_LVuFVFf9G3ZzIBd3qh6WJoqMM',
    authDomain: 'myportfolio-2f9e2.firebaseapp.com',
    databaseURL: 'https://myportfolio-2f9e2.firebaseio.com',
    projectId: 'myportfolio-2f9e2',
    storageBucket: 'myportfolio-2f9e2.appspot.com',
    messagingSenderId: '470462436733',
    appId: '1:470462436733:web:e2a8279756708b573b2814',
    measurementId: 'G-1VW3Q23CP1'
  },
  meiliSearch: {
    apiKey: 'ODQ2NDY0NjU0ZWQ0YjI4MzhjNmMzYTQ3',
    host: 'https://meilisearch-aws-instance.chikaokafor.dev/'
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
