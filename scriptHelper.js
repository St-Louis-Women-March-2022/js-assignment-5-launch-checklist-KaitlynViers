// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

            const missionTarget = document.getElementById('missionTarget');

            missionTarget.innerHTML +=`
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
   document.addEventListener('submit', function(event) {
        const pilotName = document.getElementById('pilotName');
        const copilotName = document.getElementById('copilotName');
        const fuelLevel = document.getElementById('fuelLevel');
        const cargoMass = document.getElementById('cargoMass');

            formSubmission(document, pilotName, coPilotName, fuelLevel, cargoMass);
            event.preventDefault()
   });
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
   
    const pilotName = document.querySelector('[name=pilotName').value;
        const copilotName = document.querySelector('[name=copilotName]').value;
        const fuelLevel = document.querySelector('[name=fuelLevel]').value;
        const cargoMass = document.querySelector('[name=cargoLevel]').value;

            // if(!pilotName || !copilotName || !fuelLevel || !cargoMass) {
            //     emptyField = "All fields must be filled in.";
            //     event.preventDefault()
            // }
            if (validateInput(pilotName) == ''){
                window.alert('Must fill in Pilot Name');
                validateInput.preventDefault()
            }
            if (validateInput(copilotName) == ''){
                window.alert('Must fill in Copilot Name');
                validateInput.preventDefault()
            }
            if (validateInput(fuelLevel) == ''){
                window.alert('Must fill in Fuel Level');
                validateInput.preventDefault()
            }
            if (validateInput(cargoMass) == ''){
                window.alert('Must fill in Cargo Mass');
                validateInput.preventDefault()
            }

            if (pilotName === Number || copilotName === Number) {
                window.alert('Pilot & Copilot names cannot be numeric')

            if (isNaN(fuelLevel) || isNaN(cargoMass)) {
                window.alert('Fuel level and Cargo Mass must be numeric');
            }
            }
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
