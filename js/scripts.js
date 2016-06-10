$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    if (invalidInput.test(userInput) === true) {
      alert("Please enter numbers only")
    } else {
    var numberOutput = numberConvert(userInput);
    for (i=0; i<numberOutput.length; i++) {
      $("#output").append("<li>" + numberOutput[i] + "</li>");
    }
    }
  });
});

  var numberConvert = function(number) {
    var numberArray = [];
    for (i =1; i <= number; i++){
      numberArray.push(i);
    }
    return numberArray;
  }
    var invalidInput = /[^0-9]/;
