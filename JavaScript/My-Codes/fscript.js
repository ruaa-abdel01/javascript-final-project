function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  let result = 0;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter both numbers.");
    return;
  }

  switch (operator) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        alert("Cannot divide by zero.");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Invalid operator.");
      return;
  }

  document.getElementById("output").innerText = result;
}