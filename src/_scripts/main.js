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

// Array of the nice weather icons
let icons = [
  'wi-day-sunny',
  'wi-day-haze',
  'wi-day-light-wind',
  'wi-hot',
  'wi-day-sunny-overcast',
  'wi-day-haze',
  'wi-day-light-wind',
];

// Our data object for the app
let appData = {
  city: '',
  region: '',
  units: '',
  variability: variability()
}


// Silly function to add a class to an element. Might want to delete
function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

// Finds and returns the data for our app
function setData(){
  // Use promises with API for IP location
  fetch('https://api.ipdata.co/')
  // That data is wrapped in a promise, so let's get it outta there by convering to JSON
  .then(dataWrappedByPromise => dataWrappedByPromise.json())
  // With that data, you can do whatever you want
  .then(APIdata => {
    // Set the country
    appData.country = APIdata.country_code;
    // Set the city
    appData.city = APIdata.city;
    // Set the region
    appData.region = APIdata.region;

    // Run the app!
    setLocation();
    setIcon();
    setWeatherUnits();
    setTemperature();
  });


}

// Function to randomly add a nice weather icon to the DOM
function setIcon(){
  // Get an icon from our array based on the time of the day
  let currentIcon = icons[variability()];
  // Get the icon from the dom
  let iconDiv = document.querySelector('.icon');
  // Add the class for that icon to the icon div
  addClass(iconDiv, currentIcon);
}

function setLocation() {

    // Get our location element from the DOM
    let element = document.querySelector('.location');
    // Edit the contents of the location div to be the city and region.
    element.innerHTML = `${appData.city}, ${appData.region}`;
}

// Function to set the weather in degrees.
function setWeatherUnits(){
    appData.country === 'US'  ? document.querySelector('.suffix').innerHTML ='F' : document.querySelector('.suffix').innerHTML = 'C';

}


// Function to return something between 0 and 6, corresponding to the time of day.
function variability(){
  // Get the current hour of the day (0-24)
  let now = new Date()
  let hour = now.getHours();
  // Use the hour to set the temperature  variability to somewhere between 21-27
  let variability = Math.floor(hour / 4);
  // Return it
  return variability;
}

// Function to convert to Fahrenheit
function convertToF(temp) {
  // Get celc temp
  let cTempVal = temp
  // Convert to F
  let fTempVal = Math.round((cTempVal * (9 / 5)) + 32);
  // Return the F
  let fTempValInt = Math.round(fTempVal);
  // Round F value to nearest integer
  return fTempValInt;
}

// Function to set the temp in the DOM
function setTemperature(){
  // Set value to add to celcius. The inputs are variability and a random integer between 1-3
  let celcAdd = Math.floor(Math.random() * 3) + 1 + variability();

  // Set a fake celcius temp
  let celc = 20 + celcAdd;

  // Check to see if we need to display celc or far
  let temp;
  appData.country == "US" ? temp = convertToF(celc) : temp = celc;

  // Display the temp in the DOM
  document.querySelector('.temp').innerHTML = temp;
}

setData();
