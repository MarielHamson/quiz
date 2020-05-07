// Business logic
var add = function(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
};

// Interface logic

$(document).ready(function() {
  $(".form-inline").submit(function(event) {
    firstName = $("input#name").val();

    $("#quiz").fadeIn();

    event.preventDefault();
  });

  $("form#quiz").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("input:radio[name=answer1]:checked").val());
    var number2 = parseInt($("input:radio[name=answer2]:checked").val());
    var number3 = parseInt($("input:radio[name=answer3]:checked").val());
    var number4 = parseInt($("input:radio[name=answer4]:checked").val());
    var number5 = parseInt($("input:radio[name=answer5]:checked").val());
    var result = add(number1, number2, number3, number4, number5);

    if (result >= 5 && result <= 8) {
      alert(firstName + ", " + "you should study Ruby");
    } else if (result >= 9 && result <= 12) {
      alert(firstName + ", " + "you should study JavaScript");
    } else if (result >= 13) {
      alert(firstName + "," + "you should study Python");
    }
  });
});
