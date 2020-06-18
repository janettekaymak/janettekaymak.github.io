(function () {
   const hightemp = document.getElementById('hightemp').innerHTML;
   const windspeed = document.getElementById('windspeed').innerHTML;
   let windchill = 35.74 + (0.6215 * hightemp) - (35.75 * (windspeed ** .16)) + (0.4275 * hightemp * (windspeed ** .16));
   
    
   if (hightemp <= 80 && windspeed > 3) {
      windchill = Math.round(windchill) + "&#8457";
   } else {
      windchill = "N/A";
   }
   document.getElementById('windchill').innerHTML = windchill;
 }());