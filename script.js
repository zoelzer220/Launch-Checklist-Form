// Write your JavaScript code here!

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(jsonArray) {
      const planet = document.getElementById('missionTarget');
      const randomIndex = Math.floor(Math.random() * jsonArray.length);
      planet.innerHTML = `
            <div>
               <h2>Mission Destination</h2>
                <ol>
                   <li>Name: ${jsonArray[randomIndex].name}</li>
                   <li>Diameter: ${jsonArray[randomIndex].diameter}</li>
                   <li>Star: ${jsonArray[randomIndex].star}</li>
                   <li>Distance from Earth: ${jsonArray[randomIndex].distance}</li>
                   <li>Number of Moons: ${jsonArray[randomIndex].moons}</li>
                </ol>
                <img src="${jsonArray[randomIndex].image}">
            </div>
            `;
      }); 
   });
});



window.addEventListener("load", function() {

   let form = document.querySelector("form");
   let status = document.getElementById("launchStatus");

   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");

   form.addEventListener("submit", function(event) {
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required! Please add data.")
         event.preventDefault();
      }
   });

   form.addEventListener("submit", function(event) {
      var letters = /^[A-Za-z ]+$/;
      if(!letters.test(pilotName.value)) {
         alert("Please enter a valid Pilot Name (letters/spaces only!)");
         event.preventDefault();
      }
   });

   form.addEventListener("submit", function(event) {
      var letters = /^[A-Za-z ]+$/;
      if(!letters.test(copilotName.value)) {
         alert("Please enter a valid Co-pilot Name (letters/spaces only!)");
         event.preventDefault();
      }
   });

   form.addEventListener("submit", function(event) {
      if (isNaN(fuelLevel.value)) {
         alert("Please enter a number in the Fuel Level field.")
         event.preventDefault();
      }
   });

   form.addEventListener("submit", function(event) {
      if (isNaN(cargoMass.value)) {
         alert("Please enter a number in the Cargo Mass field.")
         event.preventDefault();
      }
   });

   form.addEventListener("submit", function() {
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is Ready!`;
      copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is Ready!`;

      if (fuelLevel.value < 10000 || cargoMass.value > 10000) {
         status.innerHTML = "Shuttle NOT READY for launch!";
         status.style.color = "red";
         faultyItems.style.visibility = 'visible';
         event.preventDefault();

         if (fuelLevel.value < 10000) {
            let fuelStatus = document.getElementById("fuelStatus");
            fuelStatus.innerHTML = "Fuel status: You won't make it! Not enough fuel!"
         }   

         if (cargoMass.value > 10000) {
            let cargoStatus = document.getElementById("cargoStatus");
            cargoStatus.innerHTML = "Cargo status: You brought too much stuff! Too heavy for liftoff!"
            faultyItems.style.visibility = 'visible';
         }   

      } else {
         status.innerHTML = "Shuttle is READY for launch!";
         status.style.color = "green";
         faultyItems.style.visibility = 'visible';
         event.preventDefault();

      }  
   });
});
