$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    // var firstNameInput = $("input#firstName").val();
    // var lastNameInput = $("input#lastName").val();
    // var hairColorInput= $("input#hairColor").val();
    // var eyeColorInput = $("input#eyeColor").val();
    // var flowerColorInput = $("input#flowerColor").val();

    var inputs = ["firstName", "lastName", "hairColor", "eyeColor", "flowerColor"];

      inputs.forEach(function(input) {
        var userInput = $("input#" + input).val();
        $("." + input).text(userInput)
      });

    // $(".firstName").text(firstNameInput.toUpperCase());
    // $(".lastName").text(lastNameInput);
    // $(".hairColor").text(hairColorInput);
    // $(".eyeColor").text(eyeColorInput);
    // $(".flowerColor").text(flowerColorInput);


    $("#story").show();
    event.preventDefault();
  });

});
