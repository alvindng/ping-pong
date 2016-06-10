$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    if (invalidInput.test(userInput) === true) {
      alert("Please enter numbers only")
    } else {
    var numberOutput = userInput;
    $("#output").text(numberOutput);
    }
  });

  var invalidInput = /[^0-9]/;

});
