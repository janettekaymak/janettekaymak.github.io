
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







/*Windchill*/
(function windChill () {
  const hightemp = document.getElementById('hightemp').innerHTML;
  const windspeed = document.getElementById('windspeed').innerHTML;
  let windchill = 35.74 + (0.6215 * hightemp) - (35.75 * (windspeed ** .16)) + (0.4275 * hightemp * (windspeed ** .16));
  
   
  if (hightemp <= 50 && windspeed > 3) {
     windChill = Math.round(windChill) + "&#8457";
  } else {
     windChill = "N/A";
  }
  document.getElementById('windchill').innerHTML = windchill;
}());
