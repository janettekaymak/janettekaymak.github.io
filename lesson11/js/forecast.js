//const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=Preston,us&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0";*/


// 5 day forecast
function buildForecast(id) {
  url = "https://api.openweathermap.org/data/2.5/forecast?id=" + id + "&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0";
  fetch(url)
  .then((response) => response.json())
  .then((town) => {
     const townList = town.list;
     let daycount = 0;
     for (let i = 0; i < town.list.length; i++ ) {
        let day = townList[i].dt_txt;
        if (day.substr(11, 19) == '12:00:00') {
           daycount += 1;
           let dateParts = day.substr(0,10).split('-');
           let month = monthAbbrNames[+dateParts[1]];
           let date = month + " " + +dateParts[2];
           let dateElement = 'day' + daycount;
           document.getElementById(dateElement).innerHTML = date;

       

           // Get high
           let htemp = Math.round(townList[i].main.temp_max);
           let high = 'high' + daycount;
           document.getElementById(high).innerHTML = htemp;

            // Get low
            let ltemp = Math.round(townList[i].main.temp_max);
            let low = 'low' + daycount;
            document.getElementById(low).innerHTML = ltemp;

           // Get icon
           const imagesrc = 'https://openweathermap.org/img/w/' + townList[i].weather[0].icon + '.png';
           let imageElement = 'emo' + daycount;
           document.getElementById(imageElement).setAttribute('src', imagesrc);
           document.getElementById(imageElement).setAttribute('alt', description);
        }
     }
  });
}