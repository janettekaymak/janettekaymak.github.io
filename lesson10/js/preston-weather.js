
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Preston,us&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0';
fetch(apiURL)
.then((response) => response.json())
.then((preston) => {
  console.log(preston);
  
document.getElementById('current-temp').textContent = Math.round(preston.main.temp);
document.getElementById('hightemp').textContent = Math.round(preston.main.temp_max);
document.getElementById('humidity').textContent = preston.main.humidity;
document.getElementById('windspeed').textContent = Math.round(preston.wind.speed);
document.getElementById('conditions').textContent = preston.weather[0].main;


});



/*function GetDays(startDate, daysToAdd) {
  var weekDays = [];

  for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push(DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear());
  }

  return weekDays;
}

function DayAsString(dayIndex) {
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";

  return weekdays[dayIndex];
}

var startDate = new Date();
var aryDates = GetDates(startDate, 7);
console.log(aryDates);​
​

/*function days(current) {
  var week = new Array();
  // Starting Monday not Sunday 
  var first = ((current.getDate() - current.getDay()) + 1);
  for (var i = 0; i < 7; i++) {
    week.push(
      new Date(current.setDate(first++))
    );
  }
  return week;
}*/
function getWeekDay1(date){
  //Create an array containing each day, starting with Sunday.
  var weekdays = new Array(
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  );
  //Use the getDay() method to get the day.
  var day = date.getDay();
  //Return the element that corresponds to that index.
  return weekdays[day];
}
function getWeekDay2(date){
  //Create an array containing each day, starting with Monday.
  var weekdays = new Array(
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  );
  //Use the getDay() method to get the day.
  var day = (date).getDay();
  //Return the element that corresponds to that index.
  return weekdays[day];
}
function getWeekDay3(date){
  //Create an array containing each day, starting with Tuesday.
  var weekdays = new Array(
     "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",  "Monday" 
  );
  //Use the getDay() method to get the day.
  var day = (date).getDay();
  //Return the element that corresponds to that index.
  return weekdays[day];
}
function getWeekDay4(date){
  //Create an array containing each day, starting with Wednesday.
  var weekdays = new Array(
     "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",  "Monday", "Tuesday" 
  );
  //Use the getDay() method to get the day.
  var day = (date).getDay();
  //Return the element that corresponds to that index.
  return weekdays[day];
}
function getWeekDay5(date){
  //Create an array containing each day, starting with thursday.
  var weekdays = new Array(
     "Thursday", "Friday", "Saturday", "Sunday",  "Monday", "Tuesday", "Wednesday"
  );
  //Use the getDay() method to get the day.
  var day = (date).getDay();
  //Return the element that corresponds to that index.
  return weekdays[day];
}
document.getElementById('day1').innerHTML = getWeekDay1(date);
document.getElementById('day2').innerHTML = getWeekDay2(date);
document.getElementById('day3').innerHTML = getWeekDay3(date);
document.getElementById('day4').innerHTML = getWeekDay4(date);
document.getElementById('day5').innerHTML = getWeekDay5(date);




/*const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
const FORECAST = document.getElementsByClassName('component__forecast-box')[0];
const URL = "https://api.openweathermap.org/data/2.5/forecast/daily?" +
"q=Preston,us&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0";


  // render each daily forecast
  forecast.forEach(day => {
    let date = new Date(day.dt * 1000);
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let name = days[date.getDay()];
    let dayBlock = document.createElement("div");
    dayBlock.className = 'forecast__item';
    dayBlock.innerHTML =
      `<div class="forecast-item__heading">${name}</div>
      <div class="forecast-item__info">
      <i class="wi ${applyIcon(day.weather[0].icon)}"></i>
      <span class="degrees">${Math.round(day.temp.day)}
      <i class="wi wi-degrees"></i></span></div>`;
    FORECAST.appendChild(dayBlock);
  });
}
*/




/*Windchill*/
(function windChill () {
  const hightemp = document.getElementById('hightemp').innerHTML;
  const windspeed = document.getElementById('windspeed').innerHTML;
  let windChill = 35.74 + (0.6215 * hightemp) - (35.75 * (windspeed ** .16)) + (0.4275 * hightemp * (windspeed ** .16));
  
   
  if (hightemp <= 50 && windspeed > 3) {
     windChill = Math.round(windChill) + "&#8457";
  } else {
     windChill = "N/A";
  }
  document.getElementById('windChill').innerHTML = windChill;
}());
