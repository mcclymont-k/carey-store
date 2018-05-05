const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const SquareConnect = require('square-connect');
const defaultClient = SquareConnect.ApiClient.instance;

oauth2 = defaultClient.authentications.oauth2;
oauth2.accessToken = 'sq0atp-iQMA4lFkwz1sy0-b2efDeg'

const catalogApi = new SquareConnect.CatalogApi();
// Make an API call to the listLocations endpoint
catalogApi.listCatalog()
  .then((response) => {
    console.log(catalogApi.listCatalog());
    console.log('API called successfully, returned data: ' +
    response.itemData);
    console.log(response.objects[0].itemData)
  });
