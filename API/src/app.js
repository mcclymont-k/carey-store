const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const SquareConnect = require('square-connect');
const defaultClient = SquareConnect.ApiClient.instance;

oauth2 = defaultClient.authentications.oauth2;
oauth2.accessToken = HEROKU_LOCATION_ACCESS_TOKEN

const locationsApi = new SquareConnect.LocationsApi();
// Make an API call to the listLocations endpoint
locationsApi.listLocations()
  .then((response) => {
    console.log(locationsApi.listLocations());
    console.log('API called successfully, returned data: ' +
    response);
    console.log(response)
  });
