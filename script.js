// Select elements
const billInput = document.getElementById("billInput");
const tipPercentage = document.getElementById("tipPercentage");
const calculateButton = document.getElementById("calculateButton");
const tipResult = document.getElementById("tipResult");
const totalResult = document.getElementById("totalResult");

// Function to calculate tip and total
function calculateTip() {
    const bill = parseFloat(billInput.value);
    const tip = parseFloat(tipPercentage.value);

    if (isNaN(bill) || bill <= 0) {
        tipResult.textContent = "Please enter a valid bill amount.";
        tipResult.style.color = "red";
        totalResult.textContent = "";
        return;
    }

    const tipValue = bill * tip;
    const totalValue = bill + tipValue;

    tipResult.textContent = `Tip: $${tipValue.toFixed(2)}`;
    totalResult.textContent = `Total Amount: $${totalValue.toFixed(2)}`;
    tipResult.style.color = "green";
}

// Add event listener
calculateButton.addEventListener("click", calculateTip);
