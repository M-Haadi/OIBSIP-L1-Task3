function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect");
    var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
  
    // Check if temperatureInput is a valid number
    if (isNaN(temperatureInput)) {
      alert("Please enter a valid temperature.");
      return;
    }
  
    var convertedTemperature, convertedUnit;
  
    if (selectedUnit === "celsius") {
      convertedTemperature = (temperatureInput - 32) * 5 / 9;
      convertedUnit = "°C";
    } else {
      convertedTemperature = (temperatureInput * 9 / 5) + 32;
      convertedUnit = "°F";
    }
  
    var result = document.getElementById("result");
    result.innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + convertedUnit;
  }
  