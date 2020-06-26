const url = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0';
fetch(url)
.then((response) => response.json())
.then((soda) => {
  console.log(soda);
  
document.getElementById('sscurrent-temp').textContent = Math.round(soda.main.temp);
document.getElementById('sshi').textContent = Math.round(soda.main.temp_max);
document.getElementById('sshumidity').textContent = soda.main.humidity;
document.getElementById('sswindspeed').textContent = Math.round(soda.wind.speed);
document.getElementById('ssconditions').textContent = soda.weather[0].main;
document.getElementById('sslo').textContent = Math.round(soda.main.temp_min);
document.getElementById('ssfeelsLike').textContent = Math.round(soda.main.feels_like);
windChill();
});
 

/*windchill------------------------------------*/
function windChill (){
  const t = document.getElementById('sscurrent-temp').innerHTML;
  const ws = document.getElementById('sswindspeed').innerHTML;
  var wc = 35.74 + (0.6215 * t) - (35.75 * (ws ** .16)) + (0.4275 * t * (ws ** .16));
        
  if (t <= 50 && ws > 3) {
     var wc = Math.round(wc) + '°F';
  } 
    else {
     wc = "N/A";
  }
  document.getElementById('sswindchill').textContent = wc;
};


