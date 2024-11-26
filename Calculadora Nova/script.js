function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1); // Remove o último caractere
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        // Substitui '%' por '/100' para calcular porcentagem
        const result = eval(resultField.value.replace('%', '/100'));
        resultField.value = result;
    } catch (error) {
        resultField.value = 'Erro'; // Exibe 'Erro' em caso de erro de cálculo
    }
}



