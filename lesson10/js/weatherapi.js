const apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=Preston,us&APPID=abe726d4fa97f7d629527a984b3b6ae0';
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
});






