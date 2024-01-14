var buttonColors = ["red", "blue", "green", "yellow"];
var gamePatt = [];

function next(){
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePatt.push(randomChosenColor);
    
    $("#" + randomChosenColor).fadeIn(80).fadeOut(80).fadeIn(80).fadeOut(80);

    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();

}

