$(document).ready(function () {
  $("form#numbers").submit(function (event) {
    const number1 = parseInt($("input#input1").val());
    const number2 = parseInt($("input#input2").val());
    let result = [];


    if (number1 && number2) {
      for (let i = 0; i <= number1; i += number2) {
        if (i > 0) {
          result.push(i);
        }
      }

      $("#output").show();
      $("#output").text(result);

    } else {
      $("#warning").show();
      $("#output").hide();

    }

    event.preventDefault();
  });
});