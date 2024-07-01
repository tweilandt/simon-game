var colors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;
var level = 0;


$(document).keypress(function(){
        nextSequence();
    }
);

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatedPress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});

function playSound(color){
    var audio = new Audio("sounds/" + color +".mp3");
    audio.play();
}

function animatedPress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(() => {$("#" + currentColor).removeClass("pressed")}, 100);
}

function checkAnswer(currentLevel){

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(() => {nextSequence();}, 1000);
        }
    } else {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
    }
}

function nextSequence(){
    userClickedPattern = [];

    level++;
    $("#level-title").html(`Level ${level}`);

    var randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);

    var randomChosenColour = colors[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
