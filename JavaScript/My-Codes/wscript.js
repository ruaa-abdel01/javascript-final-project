// script.js
function calculateWeight() {
  const earthWeight = parseFloat(document.getElementById("weight").value);
  const gravity = parseFloat(document.getElementById("planet").value);

  if (isNaN(earthWeight) || isNaN(gravity)) {
    alert("Please enter a weight and select a planet!");
    return;
  }

  const result = earthWeight * gravity;
  document.getElementById("result").innerText = result.toFixed(2) + " kg";
}

function resetForm() {
  document.getElementById("weight").value = "";
  document.getElementById("planet").selectedIndex = 0;
  document.getElementById("result").innerText = "—";
}
