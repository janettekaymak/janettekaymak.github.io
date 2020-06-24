//Functions to get days of the week and show on 5dayforecast table

//Get day 1
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
  
  //Get day 2
  function getWeekDay2(date){
    //Create an array containing each day, starting with Tuesday.
    var weekdays = new Array(
       "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",  "Monday" 
    );
    var day = (date).getDay();
    return weekdays[day];
  }
  
  //Get day 3
  function getWeekDay3(date){
    //Create an array containing each day, starting with Wednesday.
    var weekdays = new Array(
       "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",  "Monday", "Tuesday" 
    );
    var day = (date).getDay();
    return weekdays[day];
  }
  
  //Get day 4
  function getWeekDay4(date){
    //Create an array containing each day, starting with thursday.
    var weekdays = new Array(
       "Thursday", "Friday", "Saturday", "Sunday",  "Monday", "Tuesday", "Wednesday"
    );
    var day = (date).getDay();
    return weekdays[day];
    }
  
    //Get day 5
    function getWeekDay5(date){
      //Create an array containing each day, starting with Friday.
      var weekdays = new Array(
         "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
      );
      var day = date.getDay();
      return weekdays[day];
    }
  
  //Fill in tabe with days of week
  document.getElementById('day1').innerHTML = getWeekDay1(date);
  document.getElementById('day2').innerHTML = getWeekDay2(date);
  document.getElementById('day3').innerHTML = getWeekDay3(date);
  document.getElementById('day4').innerHTML = getWeekDay4(date);
  document.getElementById('day5').innerHTML = getWeekDay5(date);
  
  
  //Fetch JSON weather data from openweathermap
  const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&cnt=5&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0';
  
  fetch(apiURL)
  .then((response) => response.json())
  .then((forecast) => {
    console.log(forecast);
  
  //Fill in html with forecast data  
  document.getElementById('high1').textContent = Math.round(forecast.list[0].main.temp_max);
  document.getElementById('low1').textContent = Math.round(forecast.list[0].main.temp_min);
  document.getElementById('high2').textContent = Math.round(forecast.list[1].main.temp_max);
  document.getElementById('low2').textContent = Math.round(forecast.list[1].main.temp_min);
  document.getElementById('high3').textContent = Math.round(forecast.list[2].main.temp_max);
  document.getElementById('low3').textContent = Math.round(forecast.list[2].main.temp_min);
  document.getElementById('high4').textContent = Math.round(forecast.list[3].main.temp_max);
  document.getElementById('low4').textContent = Math.round(forecast.list[3].main.temp_min);
  document.getElementById('high5').textContent = Math.round(forecast.list[4].main.temp_max);
  document.getElementById('low5').textContent = Math.round(forecast.list[4].main.temp_min);
  
  });