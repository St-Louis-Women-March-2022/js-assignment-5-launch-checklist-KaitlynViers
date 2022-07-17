// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
        response.json().then(function (json) {
            const missionTarget = document.getElementById('missionTarget');

            missionTarget.innerHTML +=`
            <div>
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src= ${imageUrl}'></img>
            </div>`
        });
    });
}
   // Here is the HTML formatting for our mission target div.
        
       

function validateInput(testInput) {
   document.addEventListener('submit', function(event) {
        event.preventDefault();

        const pilotName = document.querySelector('[name=pilotName').value;
        const copilotName = document.querySelector('[name=copilotName]').value;
        const fuelLevel = document.querySelector('[name=fuelLevel]').value;
        const cargoMass = document.querySelector('[name=cargoLevel]').value;
            let emptyField = '';
            let nonAlpha = '';
            let nonNumeric = '';

            if(!pilotName || !copilotName || !fuelLevel || !cargoMass) {
                emptyField = "All fields must be filled in.";
            }

            if (pilotName === Number || copilotName === Number) {
            nonAlpha = 'Pilots names must be alpha characters.';}

            if (isNaN(fuelLevel) || isNaN(cargoMass)) {
                nonNumeric = 'Fuel level and Cargo Mass must be numeric';
            }

            if(emptyField || nonAlpha || nonNumeric) {
                let errorMessage = `${emptyField}${nonalpha}${nonNumeric}`;
                alert(errorMessage);
            }

            else {formSubmission(event, pilotName, coPilotName, fuelLevel, cargoMass);}
   });
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
   
        launchStatus.innerHTML += `
        <div>
           <ol>
                `

        pilotStatus.innerHTML = `Pilot ${pilot} Ready`
            copilotStatus.innerHTML = `CoPilot ${copilot} Ready`;

        if (fuelLevel >= 10000) {
            faultyItems.style.visibility = 'visible';
                launchStatus.innerHTML = `Shuttle is ready for launch`;
                    launchStatus.style.color = `green`;
                        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        }

        if (cargoMass <= 10000) {
            faultyItem.style.visibility + 'visible';
                launchStatus.innerHTML = `Shuttle is ready for launch`;
                    launchStatus.style.color = `green`;
                        cargoStatus.innerHTML = `Cargo Mass low enough for launch`;
        }

        if (fuelLevel <= 10000) {
            faultyItems.style.visibility = 'visible';
                launchStatus.innerHTML = `Shuttle is not ready for launch`;
                    launchStatus.style.color = `red`;
                        fuelStatus.innerHTML = `Fuel level too low for launch`;
        }

        if (cargoLevel <= 10000) {
            faultyItem.style.visibility + 'visible';
                launchStatus.innerHTML = `Shuttle is not ready for launch`;
                    launchStatus.style.color = `red`;
                        cargoStatus.innerHTML = `Cargo mass over capacity for launch`;
}
    `
    </ol>
    </div>`;
}

async function myFetch(planetsReturned) {

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    window.addEventListener('load', () => {
        fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
            const missionTarget = document.getElementById('missionTarget');
                let index = Math.floor(Math.random() * (plantaryData.length));
                missionTarget.innerHTML +=`
                <div>
                <h2>Mission Destination</h2>
                <ol>
                        <li>Name: ${planetaryData[index].name}</li>
                        <li>Diameter: ${planetaryData[index].diameter}</li>
                        <li>Star: ${planetaryData[index].star}</li>
                        <li>Distance: ${planetaryData[index].distance}</li>
                        <li>Moons: ${planetaryData[index].moons}</li>
                    </ol>
                    <img id='missionTarget img' src ${planetaryData[index].image}></img>
                </div>`
               
                    
        });
    });
}
   


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
