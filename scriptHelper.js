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
   if (testInput === "") {
     return "Empty";
   } else if (isNaN(testInput) === true) {
     return "Not a Number";
   } else if (isNaN(testInput) === false) {
     return "Is a Number";
   }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let launchStatus = document.getElementById("launchStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let faultyItems = document.getElementById("faultyItems");

   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
     alert("All fields are required!");
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
     alert("Make sure to enter valid information for each field!");
   } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
     alert("Make sure to enter valid information for each field!");
   } else {
     pilotStatus.innerHTMl = `Pilot ${pilot} is ready for launch`;
     copilotStatus.innerHTMl = `Co-pilot ${copilot} is ready for launch`;
   }

   if (fuelLevel < 10000) {
       faultyItems.style.visibility = "visible";
       fuelStatus.innerHTMl = "Fuel level too low for launch";
       launchStatus.innerHTMl = "Shuttle Not Ready for Launch";
       launchStatus.style.color = "red";
   } else if (cargoMass > 10000) {
       faultyItems.style.visibility = "visible";
       cargoStatus.innerHTMl = "Cargo mass too heavy for launch";
       launchStatus.innerHTMl = "Shuttle Not Ready for Launch";
       launchStatus.style.color = "red";
   } else {
       fuelStatus.innerHTML = "Fuel level high enough for launch";
       cargoStatus.innerHTML = "Cargo mass low enough for launch";
       launchStatus.style.color = "green";
       launchStatus.innerHTMl = "Shuttle Ready for Launch";
   }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
  //  let planet = {};
  //  // Get random number and get planet with that index
  //  return planet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;