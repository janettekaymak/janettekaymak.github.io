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

windChill();
});



/*Functions to get days of the week and show on 5dayforecast table

function getWeekDay1(date){
  //Create an array containing each day, starting with Monday.
  var weekdays = new Array(
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  );
  //Use the getDay() method to get the day.
  var day = (date).getDay();
  //Return the element that corresponds to that index.
  return weekdays[day];
}
function getWeekDay2(date){
  //Create an array containing each day, starting with Tuesday.
  var weekdays = new Array(
     "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",  "Monday" 
  );
  //Use the getDay() method to get the day.
  var day = (date).getDay();
  //Return the element that corresponds to that index.
  return weekdays[day];
}
function getWeekDay3(date){
  //Create an array containing each day, starting with Wednesday.
  var weekdays = new Array(
     "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",  "Monday", "Tuesday" 
  );
  //Use the getDay() method to get the day.
  var day = (date).getDay();
  //Return the element that corresponds to that index.
  return weekdays[day];
}
function getWeekDay4(date){
  //Create an array containing each day, starting with thursday.
  var weekdays = new Array(
     "Thursday", "Friday", "Saturday", "Sunday",  "Monday", "Tuesday", "Wednesday"
  );
  //Use the getDay() method to get the day.
  var day = (date).getDay();
  //Return the element that corresponds to that index.
  return weekdays[day];
  }
  function getWeekDay5(date){
    //Create an array containing each day, starting with Friday.
    var weekdays = new Array(
       "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
    );
    //Use the getDay() method to get the day.
    var day = date.getDay();
    //Return the element that corresponds to that index.
    return weekdays[day];
  }
document.getElementById('day1').innerHTML = getWeekDay1(date);
document.getElementById('day2').innerHTML = getWeekDay2(date);
document.getElementById('day3').innerHTML = getWeekDay3(date);
document.getElementById('day4').innerHTML = getWeekDay4(date);
document.getElementById('day5').innerHTML = getWeekDay5(date);*/
 






function windChill (){
  const t = document.getElementById('current-temp').innerHTML;
  const ws = document.getElementById('windspeed').innerHTML;
  var wc = 35.74 + (0.6215 * t) - (35.75 * (ws ** .16)) + (0.4275 * t * (ws ** .16));
        
  if (t <= 80 && ws > 0) {
     var wc = Math.round(wc) + '°F';
  } 
    else {
     wc = "N/A";
  }
  document.getElementById('windchill').textContent = wc;
};






















