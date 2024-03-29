// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  // Auth client configurations
  authServer: 'http://localhost:5000',
  clientId : 'globalStoreWeb',
  scopes: 'globalApi read write profile openid',

  // Mapbox
  mapboxKey: 'pk.eyJ1IjoibnR2aW5uIiwiYSI6ImNra2xzd2hsYjJrYWIybm1ucGRjeWg2OHcifQ.LJ4xUzbYzprvzVlXf0fScg',

  // GlobalStoreAPi Endpoints
  globalStoreCountries: 'http://localhost:5001/v1/Countries',
  globalStoreStores: 'http://localhost:5001/v1/Stores',
  globalStoreSearch: 'http://localhost:5001/v1/Search',
  globalStoreMerchants: 'http://localhost:5001/v1/Merchants',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
