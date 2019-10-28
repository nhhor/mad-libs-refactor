$(document).ready(function() {
  $("#XXXXXX").submit(function(event) {


    // var inputs = ["firstName", "lastName", "hairColor", "eyeColor", "flowerColor"];

      inputs.forEach(function(input) {
        var userInput = $("input#" + input).val();
        $("." + input).text(userInput)
      });


    event.preventDefault();
  });

});
