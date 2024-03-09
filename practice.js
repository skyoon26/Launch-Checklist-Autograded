function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput) === true) {
    return "Not a Number";
  } else if (isNaN(testInput) === false) {
    return "Is a Number";
  }
}

function formSubmission(pilot, copilot, fuelLevel, cargoLevel) {
  if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    return ("All fields are required!");
  } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
    return ("Make sure to enter valid information for each field!");
  } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    return ("Make sure to enter valid information for each field!");
  }
}

let pilot = "Han";
let copilot = 100;
let fuelLevel = 10;
let cargoLevel = 10;

console.log(formSubmission(pilot, copilot, fuelLevel, cargoLevel));