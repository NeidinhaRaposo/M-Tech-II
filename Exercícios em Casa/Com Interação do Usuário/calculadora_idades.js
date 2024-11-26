let anoNascimento = parseInt(prompt("Digite o ano do seu nascimento:"));
let anoAtual = new Date().getFullYear();

function calcularIdade(anoNascimento, anoAtual) {
    return anoAtual - anoNascimento;
}

console.log("Você tem " + calcularIdade(anoNascimento, anoAtual) + " anos.");
