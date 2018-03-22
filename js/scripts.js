$(document).ready(function(){

  var userHeight = parseInt(prompt("Please enter your height in inches:"));

  if (userHeight >= 60){
    if(userHeight <= 74) {
      $("#freefall").show();
      $("#logflume").show();
      $("#rollercoaster").show();
      $("#loopingstarship").show();
    } else {
      $("#logflume").show();
      $("#rollercoaster").show();
      $("#loopingstarship").show();
    }
  } else {
    $("#teacups").show();
    $("#pettingzoo").show();
  }
})
