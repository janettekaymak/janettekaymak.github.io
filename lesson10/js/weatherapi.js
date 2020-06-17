const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Preston,us&APPID=abe726d4fa97f7d629527a984b3b6ae0';
fetch(apiURL)
.then((response) => response.json())
.then((preston) => {
  console.log(preston);
  
document.getElementById('current-temp').textContent = preston.main.temp;

const imagesrc = 'https://openweathermap.org/img/w/' + preston.weather[0].icon + '.png';  // note the concatenation
const desc = preston.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

});



