// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
   if (testInput.trim() === "") {
     return "Empty";
   } else if (isNaN(testInput) === true) {
     return "Not a Number";
   } else if (isNaN(testInput) === false) {
     return "Is a Number";
   }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotValidation = validateInput(pilot);
   let copilotValidation = validateInput(copilot);
   let fuelLevelValidation = validateInput(fuelLevel);
   let cargoLevelValidation = validateInput(cargoLevel);

   if (pilotValidation === "Empty" || copilotValidation === "Empty" || fuelLevelValidation === "Empty" || cargoLevelValidation === "Empty") {
     alert("All fields are required!");
     return;
   } else if (pilotValidation === "Is a Number" || copilotValidation === "Is a Number") {
     alert("Make sure to enter valid information for each field!");
     return;
   } else if (fuelLevelValidation === "Not a Number" || cargoLevelValidation === "Not a Number") {
     alert("Make sure to enter valid information for each field!");
     return;
   }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
   let planet = {};
   // Get random number and get planet with that index
   return planet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;