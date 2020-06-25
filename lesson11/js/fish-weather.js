const url = 'https://api.openweathermap.org/data/2.5/weather?&id=5585010units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0';
fetch(url)
.then((response) => response.json())
.then((fishhaven) => {
  console.log(fishhaven);
  
document.getElementById('fcurrent-temp').textContent = Math.round(fishhaven.main.temp);
document.getElementById('fhightemp').textContent = Math.round(fishhaven.main.temp_max);
document.getElementById('fhumidity').textContent = fishhaven.main.humidity;
document.getElementById('fwindspeed').textContent = Math.round(fishhaven.wind.speed);
document.getElementById('fconditions').textContent = fishhaven.weather[0].main;
document.getElementById('ffeelsLike').textContent = Math.round(fishhaven.main.feels_like);

windChill();
});
 

/*windchill------------------------------------*/
function windChill (){
  const t = document.getElementById('fcurrent-temp').innerHTML;
  const ws = document.getElementById('fwindspeed').innerHTML;
  var wc = 35.74 + (0.6215 * t) - (35.75 * (ws ** .16)) + (0.4275 * t * (ws ** .16));
        
  if (t <= 50 && ws > 3) {
     var wc = Math.round(wc) + '°F';
  } 
    else {
     wc = "N/A";
  }
  document.getElementById('fwindchill').textContent = wc;
};


