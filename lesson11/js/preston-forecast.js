//Functions to get days of the week and show on 5dayforecast table

//Get day 1
function getWeekDay1(date){
  //Create an array containing each day, starting with Sunday.
  var weekdays = new Array(
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  );
  //Use the getDay() method to get the day.
  var day = (date).getDay();
  //Return the element that corresponds to that index.
  return weekdays[day];
}

//Get day 2
function getWeekDay2(date){
  //Create an array containing each day, starting with Monday.
  var weekdays = new Array(
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" 
  );
  var day = (date).getDay();
  return weekdays[day];
}

//Get day 3
function getWeekDay3(date){
  //Create an array containing each day, starting with Tuesday.
  var weekdays = new Array(
    "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",  "Monday" 
  );
  var day = (date).getDay();
  return weekdays[day];
}

//Get day 4
function getWeekDay4(date){
  //Create an array containing each day, starting with Wednesday.
  var weekdays = new Array(
    "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",  "Monday", "Tuesday"
  );
  var day = (date).getDay();
  return weekdays[day];
  }

  //Get day 5
  function getWeekDay5(date){
    //Create an array containing each day, starting with Thursday.
    var weekdays = new Array(
      "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday" 
    );
    var day = date.getDay();
    return weekdays[day];
  }
  
  //Fill in table with days of week
  document.getElementById('day1').innerHTML = getWeekDay1(date);
  document.getElementById('day2').innerHTML = getWeekDay2(date);
  document.getElementById('day3').innerHTML = getWeekDay3(date);
  document.getElementById('day4').innerHTML = getWeekDay4(date);
  document.getElementById('day5').innerHTML = getWeekDay5(date);
  
  
  //Fetch JSON weather data from openweathermap
  const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Preston,us&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0';
  
  fetch(apiURL)
  .then((response) => response.json())
  .then((forecast) => {
    console.log(forecast);
  
    
  
  //Fill in html with forecast data  
  document.getElementById('high1').textContent = Math.round(forecast.list[0].main.temp_max);
  document.getElementById('high2').textContent = Math.round(forecast.list[8].main.temp_max);
  document.getElementById('high3').textContent = Math.round(forecast.list[16].main.temp_max);
  document.getElementById('high4').textContent = Math.round(forecast.list[24].main.temp_max);
  document.getElementById('high5').textContent = Math.round(forecast.list[32].main.temp_max);

  //Get icon1
const imagesrc = 'https://openweathermap.org/img/w/' + forecast.list[0].weather[0].icon + '.png'; 
const desc = forecast.list[0].weather[0].description;
document.getElementById('imagesrc').textContent = imagesrc;  
document.getElementById('icon1').setAttribute('src', imagesrc); 
document.getElementById('icon1').setAttribute('alt', desc);

//Get icon2
const imagesrc2 = 'https://openweathermap.org/img/w/' + forecast.list[8].weather[0].icon + '.png'; 
const desc2 = forecast.list[8].weather[0].description;
document.getElementById('imagesrc2').textContent = imagesrc2;  
document.getElementById('icon2').setAttribute('src', imagesrc2); 
document.getElementById('icon2').setAttribute('alt', desc2);
 
//Get icon3
const imagesrc3 = 'https://openweathermap.org/img/w/' + forecast.list[16].weather[0].icon + '.png'; 
const desc3 = forecast.list[16].weather[0].description;
document.getElementById('imagesrc3').textContent = imagesrc3;  
document.getElementById('icon3').setAttribute('src', imagesrc3); 
document.getElementById('icon3').setAttribute('alt', desc3);

//Get icon4
const imagesrc4 = 'https://openweathermap.org/img/w/' + forecast.list[24].weather[0].icon + '.png'; 
const desc4 = forecast.list[24].weather[0].description;
document.getElementById('imagesrc4').textContent = imagesrc4;  
document.getElementById('icon4').setAttribute('src', imagesrc4); 
document.getElementById('icon4').setAttribute('alt', desc4);

//Get icon5
const imagesrc5 = 'https://openweathermap.org/img/w/' + forecast.list[32].weather[0].icon + '.png'; 
const desc5 = forecast.list[32].weather[0].description;
document.getElementById('imagesrc5').textContent = imagesrc5;  
document.getElementById('icon5').setAttribute('src', imagesrc5); 
document.getElementById('icon5').setAttribute('alt', desc5);


});