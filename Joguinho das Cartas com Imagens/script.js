const gameBoard = document.getElementById("game-board");

// Lista de imagens (certifique-se de que as imagens estão no caminho correto)
const images = [
    "imagens/img1.jpg", "imagens/img2.jpg", "imagens/img3.jpg", "imagens/img4.jpg",
    "imagens/img5.jpg", "imagens/img6.jpg", "imagens/img7.jpg", "imagens/img8.jpg"
];
let cards = [...images, ...images];
let flippedCards = [];
let matchedCards = [];

// Embaralha as cartas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(cards);

// Cria as cartas com frente e verso
function createCard(image) {
    const card = document.createElement("div");
    card.classList.add("card");

    const frontFace = document.createElement("div");
    frontFace.classList.add("front");

    const backFace = document.createElement("div");
    backFace.classList.add("back");
    backFace.style.backgroundImage = `url(${image})`;

    console.log(`Tentando carregar imagem: ${image}`); // Verificação de imagem no console

    card.appendChild(frontFace);
    card.appendChild(backFace);

    card.addEventListener("click", handleCardClick);
    card.dataset.image = image;
    return card;
}

// Função de clique nas cartas
function handleCardClick(event) {
    const clickedCard = event.currentTarget;

    if (flippedCards.length === 2 || flippedCards.includes(clickedCard) || matchedCards.includes(clickedCard)) {
        return;
    }

    clickedCard.classList.add("flip");
    flippedCards.push(clickedCard);

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

// Verifica se as cartas combinam
function checkForMatch() {
    const [card1, card2] = flippedCards;
    const isMatch = card1.dataset.image === card2.dataset.image;

    if (isMatch) {
        matchedCards.push(card1, card2);
        flippedCards = [];

        if (matchedCards.length === cards.length) {
            alert("Parabéns! Você completou o jogo!");
        }
    } else {
        setTimeout(() => {
            card1.classList.remove("flip");
            card2.classList.remove("flip");
            flippedCards = [];
        }, 1000);
    }
}

// Adiciona as cartas ao tabuleiro
cards.forEach(image => {
    const card = createCard(image);
    gameBoard.appendChild(card);
});

