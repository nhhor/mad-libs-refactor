$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var hairColorInput= $("input#hairColor").val();
    var eyeColorInput = $("input#eyeColor").val();
    var flowerColorInput = $("input#flowerColor").val();

    $(".firstName").text(firstNameInput.toUpperCase());
    $(".lastName").text(lastNameInput);
    $(".hairColor").text(hairColorInput);
    $(".eyeColor").text(eyeColorInput);
    $(".flowerColor").text(flowerColorInput);
// order page
    var quantityInput= $("input#quantity").val();
    var addressLine1Input = $("input#addressLine1").val();
    var addressLine2Input = $("input#addressLine2").val();

    $(".quantity").text(quantityInput);
    $(".addressLine1").text(addressLine1Input);
    $(".addressLine2").text(addressLine2Input);

    $("#story").show();
    event.preventDefault();
  });


  $("#blanks2 form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var hairColorInput= $("input#hairColor").val();
    var eyeColorInput = $("input#eyeColor").val();
    var flowerColorInput = $("input#flowerColor").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".hairColor").text(hairColorInput);
    $(".eyeColor").text(eyeColorInput);
    $(".flowerColor").text(flowerColorInput);
// order page
    var quantityInput= $("input#quantity").val();
    var addressLine1Input = $("input#addressLine1").val();
    var addressLine2Input = $("input#addressLine2").val();

    $(".quantity").text(quantityInput);
    $(".addressLine1").text(addressLine1Input);
    $(".addressLine2").text(addressLine2Input);

    $("#story").show();
    event.preventDefault();
  });


  $("#blanks3 form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var appointmentTypeInput = $("input#appointmentType").val();
    var appointmentTimeInput= $("input#appointmentTime").val();
    var appointmentTime2Input = $("input#appointmentTime2").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".appointmentType").text(appointmentTypeInput);
    $(".appointmentTime").text(appointmentTimeInput);
    $(".appointmentTime2").text(appointmentTime2Input);


    $("#story").show();
    event.preventDefault();
  });
// survey



  $("#blanks4 form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var rockInput = $("input#rock").val();
    var rapInput= $("input#rap").val();


    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".rock").text(rockInput);
    $(".rap").text(rapInput);






    $("#story").show();
    event.preventDefault();
  });


});
