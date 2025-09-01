// script.js
function convertTemp() {
  const temp = parseFloat(document.getElementById('tempInput').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  if (isNaN(temp)) {
    alert("Please enter a valid temperature.");
    return;
  }

  let converted;

  // Convert input to Celsius first
  let celsius;
  if (fromUnit === "celsius") {
    celsius = temp;
  } else if (fromUnit === "fahrenheit") {
    celsius = (temp - 32) * (5 / 9);
  } else if (fromUnit === "kelvin") {
    celsius = temp - 273.15;
  }

  // Convert from Celsius to target unit
  if (toUnit === "celsius") {
    converted = celsius;
  } else if (toUnit === "fahrenheit") {
    converted = (celsius * 9 / 5) + 32;
  } else if (toUnit === "kelvin") {
    converted = celsius + 273.15;
  }

  document.getElementById('output').innerText = converted.toFixed(2) + getSymbol(toUnit);
}

function getSymbol(unit) {
  if (unit === "celsius") return " °C";
  if (unit === "fahrenheit") return " °F";
  if (unit === "kelvin") return " K";
  return "";
}

function resetFields() {
  document.getElementById('tempInput').value = '';
  document.getElementById('fromUnit').selectedIndex = 0;
  document.getElementById('toUnit').selectedIndex = 0;
  document.getElementById('output').innerText = '—';
}
