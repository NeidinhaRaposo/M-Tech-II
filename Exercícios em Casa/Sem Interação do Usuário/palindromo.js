function ehPalindromo(palavra) {
    let palavraInvertida = palavra.split("").reverse().join("");
    return palavra === palavraInvertida;
}
console.log(ehPalindromo("arara"));  // True
console.log(ehPalindromo("banana"));  // False
