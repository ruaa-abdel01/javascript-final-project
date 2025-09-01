// script.js
function calculateTip() {
  const bill = parseFloat(document.getElementById('billAmount').value);
  const tipPercent = parseFloat(document.getElementById('tipPercent').value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    alert("Please enter valid numbers for bill and tip.");
    return;
  }

  const tip = (bill * tipPercent) / 100;
  const total = bill + tip;

  document.getElementById('tipAmount').innerText = tip.toFixed(2);
  document.getElementById('totalAmount').innerText = total.toFixed(2);
}

function resetFields() {
  document.getElementById('billAmount').value = '';
  document.getElementById('tipPercent').value = '';
  document.getElementById('tipAmount').innerText = '0.00';
  document.getElementById('totalAmount').innerText = '0.00';
}
