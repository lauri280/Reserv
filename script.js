// Date variables
var reservDay = new Date("May 31, 2019 12:00:00").getTime();
var startDay = new Date("July 02, 2018 12:00:00").getTime();

var timerFunction = function(){
    var now = new Date().getTime();

    // Time variables
    var timeLeft = reservDay - now;
    var total = reservDay - startDay;
    var timePassed = now - startDay;

    // Time calculations
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000* 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    var percent = Math.round(timePassed * 100 / total * 100) / 100;

    // Display the result
    $("#date").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    $("#percent").html(percent + "%");
}

setInterval(timerFunction, 1000);