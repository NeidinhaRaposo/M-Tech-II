// Abrir e fechar o popup da calculadora
const openCalculator = document.getElementById('openCalculator');
const calculatorPopup = document.getElementById('calculatorPopup');
const closeCalculator = document.getElementById('closeCalculator');

openCalculator.onclick = () => calculatorPopup.style.display = 'flex';
closeCalculator.onclick = () => calculatorPopup.style.display = 'none';
window.onclick = (event) => {
  if (event.target === calculatorPopup) calculatorPopup.style.display = 'none';
};

// Funções da calculadora
function pressKey(key) {
  document.getElementById('display').value += key;
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
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
