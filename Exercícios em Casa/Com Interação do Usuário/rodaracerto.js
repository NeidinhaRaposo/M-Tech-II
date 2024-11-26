const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um texto: ', (texto) => {
    console.log(`O texto digitado foi: ${texto}`);
    console.log(`Número de caracteres: ${texto.length}`);
    rl.close();
});

