// Função para adicionar texto ao campo de entrada
function addToInput(value) {
    const textInput = document.getElementById("textInput");
    textInput.value += value;
}

// Função para apagar o último caractere
function backspace() {
    const textInput = document.getElementById("textInput");
    textInput.value = textInput.value.slice(0, -1);
}

// Tecla Caps Lock
let isCapsLock = false;
function toggleCapsLock() {
    isCapsLock = !isCapsLock;
}

// Abrir Pop-up
document.getElementById("openPopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

// Fechar Pop-up
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

// Adicionar funcionalidade ao teclado
const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("click", () => {
        const keyText = key.innerText;

        switch (keyText) {
            case 'Backspace':
                backspace();
                break;
            case 'Espaço':
                addToInput(' ');
                break;
            case 'Enter':
                addToInput('\n');
                break;
            case 'Caps Lock':
                toggleCapsLock();
                break;
            default:
                addToInput(isCapsLock ? keyText.toUpperCase() : keyText.toLowerCase());
        }
    });
});

// Código para tornar o pop-up "móvel"
const popup = document.getElementById("popup");
let isDragging = false;
let offsetX, offsetY;

popup.addEventListener("mousedown", function(e) {
    isDragging = true;
    offsetX = e.clientX - popup.offsetLeft;
    offsetY = e.clientY - popup.offsetTop;
});

document.addEventListener("mousemove", function(e) {
    if (isDragging) {
        popup.style.left = (e.clientX - offsetX) + "px";
        popup.style.top = (e.clientY - offsetY) + "px";
    }
});

document.addEventListener("mouseup", function() {
    isDragging = false;
});







