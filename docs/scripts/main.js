(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
];

// Silly function to add a class to an element. Might want to delete
function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

// Function to randomly add a nice weather icon to the DOM
function setIcon(){
  // Randomly get an icon from our array
  let currentIcon = icons[Math.floor(Math.random()*icons.length)];
  // Get the icon from the dom
  let iconDiv = document.querySelector('.icon');
  // Add the class for that icon to the icon div
  addClass(iconDiv, currentIcon);
}

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
setIcon();

},{}]},{},[1])

//# sourceMappingURL=main.js.map
