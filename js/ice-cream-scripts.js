$(document).ready(function() {
  $("#iceCreamForm").submit(function(event) {


    // var inputs = ["firstName", "lastName", "hairColor", "eyeColor", "flowerColor"];
    var icecreams = ["firstIcecream", "secondIcecream", "thirdIcecream"];

    var flavors = [];

    icecreams.forEach(function(icecream) {
      var userInput = $("input#" + icecream).val();
      flavors.push(userInput);

      // $("." + input).text(userInput)
    });

    console.log(flavors);

    flavors.forEach(function(flavor) {
      $("ul#resultUL").append("<li>"+flavor+"</li>");
    });

    $(".results").show();

    event.preventDefault();
  });

});
