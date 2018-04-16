// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// var $ = require('jquery');
// var Link = require('../_modules/link/link');
//
// $(function() {
//   new Link(); // Activate Link modules logic
//   console.log('Welcome to Yeogurt!');
// });

function getLocation() {
  // Use promises with API for IP location
  fetch('https://api.ipdata.co/')
  // That data is wrapped in a promise, so let's get it outta there by convering to JSON
  .then(dataWrappedByPromise => dataWrappedByPromise.json())
  // With that data, you can do whatever you want
  .then(data => {
    // Get the city from the API
    let city = data.city
    // Get the region from the API
    let region = data.region
    // Get our location element from the DOM
    let element = document.querySelector('.location');
    // Edit the contents of the location div to be the city and region. 
    element.innerHTML = `${city}, ${region}`;
  })
}

getLocation();
