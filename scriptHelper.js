// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

            const missionTarget = document.getElementById('missionTarget');

            missionTarget.innerHTML =`
            <div>
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src='${imageUrl}' ></img>
            </div>`
        }
    

   // Here is the HTML formatting for our mission target div.
        
       

function validateInput(testInput) {


            if (testInput === '') {
                return 'Empty'
            }
            else if (isNaN(testInput)) {
                return "Not a Number"
            }
            if (!isNaN(testInput)) {
                return "Is a Number"
            }
            
//    });
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
   //let form = document.queryselector('launchForm')

            if (validateInput(pilot) == 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoMass) === 'Empty'){
                alert('All fields are required.');
                
            }
            else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoMass) === 'Not a Number') {
                alert('Please enter valid information for each field');
            }
            else {
                document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready.`;
                document.getElementById('copilotStatus').innerHTML = `CoPilot ${copilot} is Ready`

                if (fuelLevel < 10000) {

                    list.style.visibility = 'visible';
                    launchStatus.style.color = 'red';
                    document.getElementById('fuelStatus').innerHTML = 'Fuel Level is too low for Launch.';
                    document.getElementById('cargoStatus').innerHTML = 'Cargo mass low enough for launch.';
                    document.getElementById('launchStatus').innerHTML = 'Shuttle is not ready for launch.';
                    
                }
                if (cargoMass > 10000) {
                    list.style.visibility = 'visible';
                    launchStatus.style.color = 'red';
                    document.getElementById('fuelStatus').innerHTML = 'Fuel Level is high enough for Launch.';
                    document.getElementById('cargoStatus').innerHTML = 'Cargo mass is too heavy for launch.';
                    document.getElementById('launchStatus').innerHTML = 'Shuttle is not ready for launch.';
                }
                if (cargoMass > 10000 && fuelLevel < 10000) {
                    list.style.visibility = 'visible';
                    launchStatus.style.color = 'red';
                    document.getElementById('fuelStatus').innerHTML = 'Fuel Level is too low for Launch.';
                    document.getElementById('cargoStatus').innerHTML = 'Cargo mass is too heavy for launch.';
                    document.getElementById('launchStatus').innerHTML = 'Shuttle is not ready for launch.'
                }
                if (cargoMass < 10000 && fuelLevel > 10000) {
                    list.style.visibility = 'visible';
                    launchStatus.style.color = 'green';
                    document.getElementById('fuelStatus').innerHTML = 'Fuel Level is high enough for Launch.';
                    document.getElementById('cargoStatus').innerHTML = 'Cargo mass is low enough for launch.';
                    document.getElementById('launchStatus').innerHTML = 'Shuttle is ready for launch!'
                }

                }
            }
            
       

async function myFetch(listedPlanets) {

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json()
        });
       

    return planetsReturned;
};

function pickPlanet(planets) {
    
      
                missionTarget = document.getElementById('missionTarget');
                let index = Math.floor(Math.random() * planets.length);
                return planets[index]
                
                    
    
}
   


// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
