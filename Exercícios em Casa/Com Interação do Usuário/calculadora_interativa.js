let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação (soma, subtracao, multiplicacao, divisao):");

function calcular(a, b, operacao) {
    if (operacao === "soma") {
        return a + b;
    } else if (operacao === "subtracao") {
        return a - b;
    } else if (operacao === "multiplicacao") {
        return a * b;
    } else if (operacao === "divisao") {
        return a / b;
    } else {
        return "Operação inválida.";
    }
}

console.log("Resultado: " + calcular(num1, num2, operacao));
