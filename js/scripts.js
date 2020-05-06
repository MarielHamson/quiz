
// Business logic

var add = function(number1, number2, number3) {
	return number1 + number2 + number3;
};

// Interface logic

$(document).ready(function() {

  $("form#quiz").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("input:radio[name=answer1]:checked").val());
    var number2 = parseInt($("input:radio[name=answer2]:checked").val());
    var number3 = parseInt($("input:radio[name=answer3]:checked").val());
    var result = add(number1, number2, number3);

    if (result >= 5 && result <= 8) {
      alert("You should study Ruby");
    } else if (result >=9 && result <= 12) {
      alert("You should study JavaScript");
    } else if (result >= 13) {
      alert("You should study Python");
    }
  });
});