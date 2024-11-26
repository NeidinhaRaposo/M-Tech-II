let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));

function converterParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsius + "°C é igual a " + converterParaFahrenheit(celsius) + "°F.");
