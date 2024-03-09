// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })

    // add event listener for button then need to grab four inputs and pass those inputs into formSubmission within the event listener
    const button = document.getElementById("formSubmit");
    // const form = this.document.querySelector("form");

    button.addEventListener("click", function() {
      let pilot = document.querySelector("input[name=pilotName");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let list = document.getElementById("faultyItems");
      
      formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
      event.preventDefault();
    });
    
 });