const url = 'https://api.openweathermap.org/data/2.5/weather?q=Preston,us&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0';
fetch(url)
.then((response) => response.json())
.then((preston) => {
  console.log(preston);
  
document.getElementById('current-temp').textContent = Math.round(preston.main.temp);
document.getElementById('hi').textContent = Math.round(preston.main.temp_max);
document.getElementById('humidity').textContent = preston.main.humidity;
document.getElementById('windspeed').textContent = Math.round(preston.wind.speed);
document.getElementById('conditions').textContent = preston.weather[0].main;
document.getElementById('lo').textContent = Math.round(preston.main.temp_min);
document.getElementById('feelsLike').textContent = Math.round(preston.main.feels_like);


windChill();
});
 

/*windchill------------------------------------*/
function windChill (){
  const t = document.getElementById('current-temp').innerHTML;
  const ws = document.getElementById('windspeed').innerHTML;
  var wc = 35.74 + (0.6215 * t) - (35.75 * (ws ** .16)) + (0.4275 * t * (ws ** .16));
        
  if (t <= 50 && ws > 3) {
     var wc = Math.round(wc) + '°F';
  } 
    else {
     wc = "N/A";
  }
  document.getElementById('windchill').textContent = wc;
};














