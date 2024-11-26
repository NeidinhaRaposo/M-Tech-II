// Seleciona o botão de login pelo ID 'btn-login' e armazena na variável 'btnLogin'
const btnLogin = document.getElementById('btn-login');

// Seleciona o modal de login pelo ID 'loginModal' e armazena na variável 'modal'
const modal = document.getElementById('loginModal');

// Seleciona o elemento de fechamento (X) do modal usando a classe 'close' e armazena na variável 'closeModal'
const closeModal = document.querySelector('.close');

// Adiciona um evento de clique ao botão de login, que abrirá o modal
btnLogin.onclick = function() {
    // Quando o botão de login é clicado, o modal fica visível, definindo seu estilo 'display' como 'block'
    modal.style.display = 'block';
}

// Adiciona um evento de clique ao botão de fechar (X) do modal
closeModal.onclick = function() {
    // Quando o 'X' é clicado, o modal fica oculto, definindo seu estilo 'display' como 'none'
    modal.style.display = 'none';
}

// Adiciona um evento de clique global na janela para detectar cliques fora do modal
window.onclick = function(event) {
    // Verifica se o elemento clicado é o próprio modal (não seu conteúdo interno)
    if (event.target === modal) {
        // Se o clique foi fora do conteúdo, o modal é ocultado
        modal.style.display = 'none';
    }
}


/*Cada variável seleciona um elemento específico do HTML para controle do modal.
Os eventos onclick aplicados a btnLogin e closeModal abrem e fecham o modal, respectivamente.
A função window.onclick permite fechar o modal ao clicar fora dele, mantendo-o fechado apenas ao clicar no próprio modal 
e não em seus elementos internos.
Essa estrutura mantém o modal intuitivo e fácil de usar, com comportamento esperado para abertura e fechamento.*/
