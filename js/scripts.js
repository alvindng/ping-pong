$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    var numberOutput = userInput;
    $("#output").text(numberOutput);
  });
});
