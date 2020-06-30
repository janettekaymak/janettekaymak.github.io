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
  .then((prices) => {
    console.log(prices);


    //Fill in html with vehicle name 
    document.getElementById('met-name').textContent = prices.vehicles[0].name;
    document.getElementById('dio-name').textContent = prices.vehicles[1].name;
    document.getElementById('pcx-name').textContent = prices.vehicles[2].name;
    document.getElementById('atv-name').textContent = prices.vehicles[3].name;
    document.getElementById('4door-name').textContent = prices.vehicles[4].name;
    document.getElementById('2door-name').textContent = prices.vehicles[5].name;

    //Fill in html with number of persons allowed 
    document.getElementById('met-max').textContent = prices.vehicles[0].max_persons;
    document.getElementById('dio-max').textContent = prices.vehicles[1].max_persons;
    document.getElementById('pcx-max').textContent = prices.vehicles[2].max_persons;
    document.getElementById('atv-max').textContent = prices.vehicles[3].max_persons;
    document.getElementById('4door-max').textContent = prices.vehicles[4].max_persons;
    document.getElementById('2door-max').textContent = prices.vehicles[5].max_persons;

    //Fill in html with price for reserved half day
    document.getElementById('res-met-half').textContent = prices.vehicles[0].res_half;
    document.getElementById('res-dio-half').textContent = prices.vehicles[1].res_half;
    document.getElementById('res-pcx-half').textContent = prices.vehicles[2].res_half;
    document.getElementById('res-atv-half').textContent = prices.vehicles[3].res_half;
    document.getElementById('res-4door-half').textContent = prices.vehicles[4].res_half;
    document.getElementById('res-2door-half').textContent = prices.vehicles[5].res_half;

    //Fill in html with price for reserved full day
    document.getElementById('res-met-full').textContent = prices.vehicles[0].res_full;
    document.getElementById('res-dio-full').textContent = prices.vehicles[1].res_full;
    document.getElementById('res-pcx-full').textContent = prices.vehicles[2].res_full;
    document.getElementById('res-atv-full').textContent = prices.vehicles[3].res_full;
    document.getElementById('res-4door-full').textContent = prices.vehicles[4].res_full;
    document.getElementById('res-2door-full').textContent = prices.vehicles[5].res_full;

    //Fill in html with price for walk ins half day
    document.getElementById('in-met-half').textContent = prices.vehicles[0].in_half;
    document.getElementById('in-dio-half').textContent = prices.vehicles[1].in_half;
    document.getElementById('in-pcx-half').textContent = prices.vehicles[2].in_half;
    document.getElementById('in-atv-half').textContent = prices.vehicles[3].in_half;
    document.getElementById('in-4door-half').textContent = prices.vehicles[4].in_half;
    document.getElementById('in-2door-half').textContent = prices.vehicles[5].in_half;

    //Fill in html with price for walk ins full day
    document.getElementById('in-met-full').textContent = prices.vehicles[0].in_full;
    document.getElementById('in-dio-full').textContent = prices.vehicles[1].in_full;
    document.getElementById('in-pcx-full').textContent = prices.vehicles[2].in_full;
    document.getElementById('in-atv-full').textContent = prices.vehicles[3].in_full;
    document.getElementById('in-4door-full').textContent = prices.vehicles[4].in_full;
    document.getElementById('in-2door-full').textContent = prices.vehicles[5].in_full;

  });