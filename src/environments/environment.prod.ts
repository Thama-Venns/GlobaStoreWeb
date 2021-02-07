export const environment = {
  production: true,

  // Auth client configurations
  authServer: 'http://localhost:5000',
  clientId : 'globalStoreWeb',
  scopes: 'globalApi read write openid',

  // Mapbox
  mapboxKey: 'pk.eyJ1IjoibnR2aW5uIiwiYSI6ImNra2xzd2hsYjJrYWIybm1ucGRjeWg2OHcifQ.LJ4xUzbYzprvzVlXf0fScg',

  // GlobalStoreAPi Endpoints
  globalStoreCountries: 'http://localhost:5001/v1/Countries' 
};
