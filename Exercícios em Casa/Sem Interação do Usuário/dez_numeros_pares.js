/* Crie um laço for que conte de 1 a 10 e exiba cada número no console.
Modifique o laço para exibir apenas os números pares. */

// Contando de 1 a 10
for (let n = 1; n <= 10; n++) {
    console.log(n);
}

// Exibindo apenas números pares
for (let n = 1; n <= 10; n++) {
    if (n % 2 === 0) {
        console.log(n);
    }
}
