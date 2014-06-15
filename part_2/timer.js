"use strict";

$(document).ready(function() {

var firstInputMin = $("#minutes").val();
var secondInputSec = $("#seconds").val();
var isTimerON = false;
var $seconds = 1000;


var handleOne = function() {
    setInterval(function() {
      $("#second-first-digit").text(secondInputSec);
      secondInputSec--;
      $("#minute-first-digit").text(firstInputMin);
      timeContolDown();
      }, $seconds);
}

var handleTwo = function() {
    setInterval(function() {
      $("#second-first-digit").text(secondInputSec);
      secondInputSec++;
      $("#minute-first-digit").text(firstInputMin);
      timeContolUp();
      }, $seconds);
}

function timeForward() {
    if (!isTimerON) {
        isTimerON = true;
        handleTwo();
}
}

function timeBackward() {
    if (!isTimerON) {
        isTimerON = true;
        handleOne();
}
}

function timeContolDown() {
  if (secondInputSec === -1) {
    firstInputMin--;
    secondInputSec = 59;
  }
  if (firstInputMin < 0) {
    clearInterval();
    $("#second-first-digit").text(0);
    $("#minute-first-digit").text(0);
  }
}

function timeContolUp() {
  if (secondInputSec === 61) {
    firstInputMin++;
    secondInputSec = 1;
  }
}

$("button:first").on("click", function() {
    timeForward();
  });

$("button:nth-of-type(2)").on("click", function() {
    timeBackward();
  });

$("button:last").on("click", function() {
    clearInterval(handleOne);
    clearInterval(handleTwo);
    $("#second-first-digit").text("00");
    $("#minute-first-digit").text("00");
  });

});
