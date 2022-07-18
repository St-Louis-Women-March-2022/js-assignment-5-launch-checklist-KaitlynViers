
// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");



window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   this.document.getElementById(myFetch);
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function(result) {
       listedPlanets = result;
       console.log(listedPlanetsResponse);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        pickPlanet(listedPlanetsResponse);
    })
    pickPlanet(listedPlanetsResponse);
});