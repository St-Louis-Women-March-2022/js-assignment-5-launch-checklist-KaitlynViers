
// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");



window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function(result) {
       listedPlanets = result;
       console.log(listedPlanetsResponse);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetaryData = pickPlanet(listedPlanets);
        addDestinationInfo(document, planetaryData.name, planetaryData.diameter, planetaryData.star, planetaryData.distance, planetaryData.moons, planetaryData.image)
   }); 
            faultyItems.style.visibility = 'hidden';

            let form = document.querySelector("form")
            form.addEventListener('submit', function(event){
               event.preventDefault()
            const pilotName = document.querySelector('input[name=pilotName]').value;
            const copilotName = document.querySelector('input[name=copilotName]').value;
            const fuelLevel = document.querySelector('input[name=fuelLevel]').value;
            const cargoMass = document.querySelector('input[name=cargoMass]').value
            const list = document.getElementById('faultyItems')
            return formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
       })
     });