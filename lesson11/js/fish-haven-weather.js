const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Preston,us&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0';
fetch(apiURL)
.then((response) => response.json())
.then((fishhaven) => {
  console.log(fishhaven);
  
document.getElementById('current-temp').textContent = Math.round(fishhaven.main.temp);
document.getElementById('hightemp').textContent = Math.round(fishhaven.main.temp_max);
document.getElementById('humidity').textContent = fishhaven.main.humidity;
document.getElementById('windspeed').textContent = Math.round(fishhaven.wind.speed);
document.getElementById('conditions').textContent = fishhaven.weather[0].main;
document.getElementById('feelsLike').textContent = Math.round(fishhaven.main.feels_like);

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


