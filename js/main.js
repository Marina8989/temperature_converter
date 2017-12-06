const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function celciusToFahrenheitAndKelvin(){
        const cTemp = parseFloat(celciusInput.value);
        const fTemp = (cTemp * (9/5)) + 32;
        const kTemp = cTemp + 273.15;
        fahrenheitInput.value = fTemp;
        kelvinInput.value = kTemp;
}
function fahrenheitToCelciusAndKelvin() {
	const fTemp = parseFloat(fahrenheitInput.value)
}

celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin)
