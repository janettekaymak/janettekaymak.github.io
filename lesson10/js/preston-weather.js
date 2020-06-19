
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Preston,us&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0';
fetch(apiURL)
.then((response) => response.json())
.then((preston) => {
  console.log(preston);
  
document.getElementById('current-temp').textContent = Math.round(preston.main.temp);
document.getElementById('hightemp').textContent = Math.round(preston.main.temp_max);
document.getElementById('humidity').textContent = preston.main.humidity;
document.getElementById('windspeed').textContent = Math.round(preston.wind.speed);
document.getElementById('conditions').textContent = preston.weather[0].main;


});





/*const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
const FORECAST = document.getElementsByClassName('component__forecast-box')[0];
const URL = "https://api.openweathermap.org/data/2.5/forecast/daily?" +
"q=Preston,us&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0";


  // render each daily forecast
  forecast.forEach(day => {
    let date = new Date(day.dt * 1000);
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let name = days[date.getDay()];
    let dayBlock = document.createElement("div");
    dayBlock.className = 'forecast__item';
    dayBlock.innerHTML =
      `<div class="forecast-item__heading">${name}</div>
      <div class="forecast-item__info">
      <i class="wi ${applyIcon(day.weather[0].icon)}"></i>
      <span class="degrees">${Math.round(day.temp.day)}
      <i class="wi wi-degrees"></i></span></div>`;
    FORECAST.appendChild(dayBlock);
  });
}
*/




/*Windchill*/
(function windChill () {
  const hightemp = document.getElementById('hightemp').innerHTML;
  const windspeed = document.getElementById('windspeed').innerHTML;
  let windChill = 35.74 + (0.6215 * hightemp) - (35.75 * (windspeed ** .16)) + (0.4275 * hightemp * (windspeed ** .16));
  
   
  if (hightemp <= 50 && windspeed > 3) {
     windChill = Math.round(windChill) + "&#8457";
  } else {
     windChill = "N/A";
  }
  document.getElementById('windChill').innerHTML = windChill;
}());