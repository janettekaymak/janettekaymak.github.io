
/*Functions to get days of the week and show on 5dayforecast table*/

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
  document.getElementById('day5').innerHTML = getWeekDay5(date);


/*const URL = "https://api.openweathermap.org/data/2.5/forecast?q=Preston,us&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0";*/
