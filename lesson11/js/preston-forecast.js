const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=Preston,us&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0";

fetch(apiURL)
.then((response) => response.json())
.then((forecast) => {
  console.log(forecast);
 
document.getElementById('high1').textContent = Math.round(forecast.list[0].main.temp_max);
/*document.getElementById('hightemp').textContent = Math.round(preston.main.temp_max);
document.getElementById('humidity').textContent = preston.main.humidity;
document.getElementById('windspeed').textContent = Math.round(preston.wind.speed);
document.getElementById('conditions').textContent = preston.weather[0].main;
document.getElementById('feelsLike').textContent = Math.round(preston.main.feels_like);*/

});
