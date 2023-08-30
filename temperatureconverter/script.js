const convertButton = document.getElementById("convertBtn");
const inputTemperature = document.getElementById("inputTemp");
const scaleSelect = document.getElementById("scale");
const resultElement = document.getElementById("result");

convertButton.addEventListener("click", convertTemperature);

function convertTemperature() {
    const temperature = parseFloat(inputTemperature.value);
    const selectedScale = scaleSelect.value;

    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid temperature.";
        return;
    }

    let convertedTemp;
    let convertedScale;

    if (selectedScale === "celsius") {
        convertedTemp = (temperature - 32) * (5 / 9);
        convertedScale = "Celsius";
    } else {
        convertedTemp = (temperature * 9 / 5) + 32;
        convertedScale = "Fahrenheit";
    }

    resultElement.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${convertedScale}`;
}
