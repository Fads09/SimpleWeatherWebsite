var url = "https://fcc-weather-api.glitch.me/api/current?"
var lat, long; 

$(document).ready(function() {
   if ("geolocation" in navigator) {
     navigator.geolocation.getCurrentPosition( function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        url = url + "lat=" + lat + "&lon=" + long; 
        console.log(url);
        

    $.getJSON(url, function(json) {
            currentWeather = json.weather[0].description;
            currentLocation = json.name;
            currentTemp = json.main.temp;
           
            $("#temp").html(currentTemp);
            $("#descrip").html(currentLocation + "&nbsp;" + "has" + "&nbsp;" + currentWeather);


        });

         
         $("#btn").on("click", function(){
           var tempCalculation; 
        
           if ($("#tempUnit").hasClass("celsius")) {
               $("#tempUnit").addClass("farenheit").removeClass("celsius");
               $("#tempUnit").html("Degree: &#8457");
               $("button").html(" Fahrenheit ");
               tempCalculation = Math.round((currentTemp*(9/5)+32)*100)/100;
               $("#temp").html(tempCalculation);
           } else {
               $("#tempUnit").removeClass("farenheit").addClass("celsius");
               $("#tempUnit").html(" &#8451");
               $("#tempUnit").html(" Degree: &#8451");
               $("button").html(" Celsius ");
               $("#temp").html(currentTemp);
           };
         });             
     });
       
   };
    
    
});