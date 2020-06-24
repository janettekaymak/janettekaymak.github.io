
const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Preston,us&cnt=5&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0';
fetch(apiURL)
.then((response) => response.json())
.then((forecast) => {
  
  high1 = Math.round(forecast.list[0].main.temp_max);
  document.getElementByID('high1').innerHTML = high1;
  

 });


 