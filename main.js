
$(document).ready(function(){ 

    
var api = "https://fcc-weather-api.glitch.me/api/current?lat=51.5098&lon=-0.1180";
//entered London's lat and lon here 

  $.getJSON(api, function(data){

      var weatherType = data.weather[0].description;
      var tempC = data.main.temp.toFixed(0);
      var windSpeed = data.wind.speed;
      var city = data.name;
    

    //celcius to fahrenheit:
    fahrenheit = ((tempC) * (9/5) +32).toFixed(0);

    //m/s to mph formula:
    mphWind = (2.237 * windSpeed).toFixed(0);


console.log(weatherType); //clear sky, mederate rain, light rain, drizzle rain,
console.log(tempC); //6
console.log(city); //London
console.log(windSpeed); //5.1
// console.log(fahrenheit);

// $("#city").html(city);
$("#weatherType").html(weatherType);
$("#tempC").html(tempC + "° C");
$("#fahrenheit").html(fahrenheit + "° F");
$("#windSpeed").html(windSpeed + " m/s");
$("#mphWind").html(mphWind + " mph")



//OMG - THIS IS AMAZING :
//temperature

$("#tempC").click(function(){
  $("#fahrenheit").slideToggle("fast");
  $('#tempC').hide();
});

$("#fahrenheit").click(function(){
  $("#tempC").slideToggle("fast");
  $('#fahrenheit').hide();
});



//wind speed:

$("#windSpeed").click(function(){
  $("#mphWind").slideToggle("fast");
  $('#windSpeed').hide();
});

$("#mphWind").click(function(){
  $("#windSpeed").slideToggle("fast");
  $('#mphWind').hide();
});



//background image changes with the Weather Type:

//rain - daytime
if (weatherType = "rain"){

    $("body").css("background-image", "url(https://source.unsplash.com/v3UZKbMaTGk/1300x1700)");
    $(".weather-data").css("background-color", "white");
    $(".weather-data").css("opacity", "0.8");
    $(".weather-data").css("border-radius", "10px");
    $(".weather-data").css("margin", "0 10% 0 10%");

//clear - red evening sky
}else if (weatherType = "clear"){

    $("body").css("background-image", "url(https://source.unsplash.com/9AhjM128cy0/1500x1700)");

//sunny - sunny big ben
}else if (weatherType = "sunny"){

    $("body").css("background-image", "url(https://source.unsplash.com/1Z7QDZqT2QQ/1500x1700)");

//cloudy - evening nigth
}else if (weatherType = "clouds"){

    $("body").css("background-image", "url(https://source.unsplash.com/DpI-_wydgJM/1500x1700)");
    $(".weather-data").css("color", "#d6b419");

}




  });

});





//TIME & DATE FUNCTION
//ADJUSTED DATE FORMAT TO DD/MM/YYYY

//time
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);
    

 document.getElementById('display').innerHTML = h+":"+m;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


//date
function startDate() {
  var d = new Date();
  var days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+d.getDate()+"/"+[d.getMonth()+1]+"/"+d.getFullYear();
}








