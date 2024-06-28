var colors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];


function nextSequence(){
    var randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);

    var randomChosenColour = colors[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    console.log(`sounds/${randomChosenColour}.mp3`);
    playSound(randomChosenColour);
}

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatedPress(userChosenColor);
});

function playSound(color){
    var audio = new Audio("sounds/" + color +".mp3");
    audio.play();
}

function animatedPress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(() => {$("#" + currentColor).removeClass("pressed")}, 100);
}