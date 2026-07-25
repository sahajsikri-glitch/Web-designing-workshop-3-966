// what is synchronous js code?
// most of the code we've been writing
// means code is executed line by line

// ASYNCHRONOUS CODE ?
// is executed after a task runs in the bg finishes
// EXECUTION doesnt wait for ASYNCHRNOUS TASK to finish its work

//eg-1 settimeout
// eg-2 img.src (To load an image )

// const img = document.querySelector(".dog");
// img.src = "dog.jpg";
// img.addEventListener("load", function () {
//   img.classList.add("fadeIn");
// });
// p.style.width = "300px";

// AJAX(ASYNCHROUNOUS JS AND XML)=allow us to communicate with
//  remote web servers in asynchronous way.
// with ajax calls we can request data from web servers dynamically

// client request --> web server(usually web api)
// client <--response web server(usually web api)

//API = it is basically a piece of software that can be used by another
//piece of software;in order to allow applications to talk to each other
// => exchange information

// eg(IN REAL WORLD - dom api , geolocation api

// Think of an API as a waiter in a restaurant.
// YOU (Browser)
//       │
//       ▼
//     API (Waiter)
//       │
//       ▼
// Database / Server (Kitchen)

// You don't go into the kitchen.
// You tell the waiter
// "Give me Portugal's information."

// ONLINE API = application running on a server that recieves request
// as data and sends data back as response
// we can build our own API using backend development

// there are usually API for everything mostly :
// weather data
// data about countries
// flights data
// currency onversion
// google maps

// XML IS USED TO TRANSMIT DATA ON THE WEB
// nowadays noone se xml data format anymore ;
// people use jason format coz its easy to use

//OUR FIRST AJAX CALL :
"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

//OLD SCHOOL WAY OF AJAX CALLING :
const request = new XMLHttpRequest();
// This creates an object capable of making an HTTP request.
// Think of it as creating a delivery truck.
// Truck created.
// Not moving yet.

request.open(
  "GET", //There are different HTTP methods.
  // GET
  // Give me data.

  // POST
  // Create new data.

  // PUT
  // Update data.

  // DELETE
  // Delete data.

  "https://countries-api-836d.onrender.com/countries/name/portugal",
  //This is the address of the API.
);
request.send(); //Now the truck leaves

request.addEventListener("load", function () {
  //this means when the fucn finishes loading ;run this function
  // console.log(this.responseText);
  const [data] = JSON.parse(this.responseText); //IMP!
  //JSON.parse() converts
  // TEXT
  // ↓
  // JavaScript Object
  //SO NOW I CAN USE DATA.NAME AND ALL SHIT

  console.log(data);
  //JSON is basically a big string of text

  //LEARN THIS WAY OF OPERATING
  //THIS IS VERY COMMON IN REAL WORLD FRONTEND USING
  const html = `
<article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row">
      <span>👫</span>${(+data.population / 1000000).toFixed(1)}
    </p>
    <p class="country__row">
      <span>🗣️</span>${data.languages[0].name}
    </p>
    <p class="country__row">
      <span>💰</span>${data.currencies[0].name}
    </p>
  </div>
</article>;`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  // means Insert this HTML inside
  // <div class="countries">  at the end.

  // Equivalent to

  // <div class="countries">
  // existing content
  // ↓
  // new Portugal card
  // </div>
  countriesContainer.computedStyle.opacity = 1;
});

//NOWADAYS WE CALL THIS SHIT JASON
// The key idea is:
// Old websites

// Click button
// ↓
// Whole page reloads
// ↓
// New data appears

// Modern websites:

// Click button
// ↓
// Request data
// ↓
// Only update the necessary part
// ↓
// No page refresh

// That's why sites like Instagram, X (Twitter), and Gmail feel smooth.
