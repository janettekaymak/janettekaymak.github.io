
//Fetch JSON weather data from openweathermap
const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Preston,us&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0';

fetch(apiURL)
  .then((response) => response.json())
  .then((forecast) => {
    console.log(forecast);

  const fiveDayForecast = forecast.list.filter(x => x.dt_txt.includes('18:00:00'));
  console.log(fiveDayForecast);

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = 0;
  fiveDayForecast.forEach(cast => {
    let d = new Date(cast.dt_txt);
    document.getElementById('high' + (day + 1)).textContent = Math.round(cast.main.temp);
    document.getElementById('day' + (day + 1)).textContent = weekDays[d.getDay()];

    //Get icon
    const imagesrc = 'https://openweathermap.org/img/w/' + cast.weather[0].icon + '.png';
    const desc = cast.weather[0].description;
    document.getElementById('imagesrc' + (day + 1)).setAttribute = imagesrc;
    document.getElementById('icon' + (day + 1)).setAttribute('src', imagesrc);
    document.getElementById('icon' + (day + 1)).setAttribute('alt', desc);

    day++;
    
  });

  });


