function add(number1, number2) {
  return number1 + number2;
}
function sub(number1, number2) {
  return number1 - number2;
}
function multi(number1, number2) {
  return number1 * number2;
}
function div(number1, number2) {
  return number1 / number2;
}

function calculate(operation) {
  // Get input values
  let number1 = Number(document.getElementById("numberOne").value);
  let number2 = Number(document.getElementById("numberTwo").value);

  // Validate input
  if (isNaN(number1) || isNaN(number2)) {
    alert("Please enter valid numbers");
    return;
  }
  let result;
  try {
    // Perform calculation based on selected operation
    switch (operation) {
      case "add":
        result = add(number1, number2);
        break;
      case "subtract":
        result = sub(number1, number2);
        break;
      case "multiply":
        result = multi(number1, number2);
        break;
      case "divide":
        result = div(number1, number2);
        break;
      default:
        throw new Error("Invalid operation");
    }

    // Display result
    document.getElementById("result").innerHTML = result;
  } catch (error) {
    alert(error.message);
  }
}
