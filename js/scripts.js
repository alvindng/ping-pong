$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    $("ul#output li").remove("li");
    if (invalidInput.test(userInput) === true) {
      alert("Please enter numbers only")
    } else {
    var numberOutput = numberConvert(userInput);
    for (i=0; i<numberOutput.length; i++) {
      $("#output").append("<li>" + numberOutput[i] + "</li>");
      $("img.img-relative").show("img");
    }
    }
  });
});

  var numberConvert = function(number) {
    var numberArray = [];
    for (i =1; i <= number; i++){
      if (i%15 === 0){
        numberArray.push("ping-pong");
      } else if (i%5 === 0){
        numberArray.push("pong");
      } else if (i%3 === 0){
        numberArray.push("ping");
      } else {
        numberArray.push(i);
      }
    }
    return numberArray;
  }
  var invalidInput = /[^0-9]/;
