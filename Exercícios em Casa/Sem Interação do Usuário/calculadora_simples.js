function calcular(a, b, operacao) {
    if (operacao === "Soma") {
        return a + b;
    } else if (operacao === "Subtracao") {
        return a - b;
    } else if (operacao === "Multiplicacao") {
        return a * b;
    } else if (operacao === "Divisao") {
        return a / b;
    } else {
        return "Operação Inválida.";
    }
}
console.log(calcular(10, 5, "Multiplicacao"));
