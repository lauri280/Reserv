//End date
var reservDay = new Date("May 31, 2019 12:00:00").getTime();

var timerFunction = function(){
    var now = new Date().getTime();

    //The distance from now until the end date.
    var distance = reservDay - now;

    //Time calculations
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000* 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //display the result
    document.getElementById("header").getElementsByTagName("h1")[1].innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

setInterval(timerFunction, 1000);