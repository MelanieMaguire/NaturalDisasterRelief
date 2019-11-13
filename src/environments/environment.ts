// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// this is all the information that links the project to the firebase database
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB3eTbWFS2izVhbwtd2XouY9DNGCRyt63o",
    authDomain: "natural-disaster-relief-app.firebaseapp.com",
    databaseURL: "https://natural-disaster-relief-app.firebaseio.com",
    projectId: "natural-disaster-relief-app",
    storageBucket: "natural-disaster-relief-app.appspot.com",
    messagingSenderId: "1033920346320",
    appId: "1:1033920346320:web:50fa90182d8ce8b57bc6d5",
    measurementId: "G-5CCTDH5DH7"
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
