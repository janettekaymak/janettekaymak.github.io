/*const myURL = 'https://janettekaymak.github.io/lesson13/js/vehicles.json';

fetch(myURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const vehicles = jsonObject['vehicles'];

    //Create elements and content
    for (let i = 0; i < vehicles.length; i++ ) {
        let table = document.createElement('table')
        let name = document.createElement('span');
        let max_persons = document.createElement('span');
        let res_half = document.createElement('span');
        let res_full = document.createElement('span');
        let in_half = document.createElement('span');
        let in_full = document.createElement('span');

        //Create content
        name.textContent = vehicles[i].name;
        max_persons.textContent = vehicles[i].max_persons;
        res_half.textContent = vehicles[i].res_half;
        res_full.textContent = vehicles[i].res_full;
        in_half.textContent = vehicles[i].in_half;
        in_full.textContent = vehicles[i].in_full;


        //Put elements in each
        table.appendChild(name);
        table.appendChild(max_persons);
        table.appendChild(res_half);
        table.appendChild(res_full);
        table.appendChild(in_half);
        table.appendChild(in_full);
        document.querySelector('table.rentals').appendChild(table);
    }
  });*/


  //Fetch JSON weather data from openweathermap
  const myURL = 'https://janettekaymak.github.io/lesson13/data/vehicles.json';
  
  fetch(myURL)
  .then((response) => response.json())
  .then((vehicles) => {
    console.log(vehicles);
  
  let name = createElement('span');
  
  //Fill in html with forecast data  
  document.getElementById('met-name').textContent = "Vehicle Name";
  document.getElementById('dio-name').textContent = vehicles[1].name;
  document.getElementById('pcx-name').textContent = vehicles[2].name;
  document.getElementById('atv-name').textContent = vehicles[3].name;
  document.getElementById('4door-name').textContent = vehicles[4].name;
  document.getElementById('2door-name').textContent = vehicles[5].name;

});
  