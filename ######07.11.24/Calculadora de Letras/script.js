const openCalculator = document.getElementById('openCalculator');
const calculatorPopup = document.getElementById('calculatorPopup');
const closeCalculator = document.getElementById('closeCalculator');

openCalculator.onclick = () => calculatorPopup.style.display = 'flex';
closeCalculator.onclick = () => calculatorPopup.style.display = 'none';
window.onclick = (event) => {
  if (event.target === calculatorPopup) calculatorPopup.style.display = 'none';
};

// Função de conversão de letras para números
function convertLetters(expression) {
  return expression.replace(/[A-Z]/g, (letter) => letter.charCodeAt(0) - 64);
}

// Funções da calculadora
function pressKey(key) {
  document.getElementById('display').value += key;
}

function calculate() {
  const display = document.getElementById('display');
  const expression = convertLetters(display.value);
  try {
    display.value = eval(expression);
  } catch {
    display.value = 'Erro';
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}
