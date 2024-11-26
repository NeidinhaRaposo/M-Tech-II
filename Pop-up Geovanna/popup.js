function abrirModal() {
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'enviar')
            modal.classList.remove('abrir')
    })
}

function validarformulario() {
    let email = document.forms["meuform"]["email"].value
    if (email == ""){
        alert("O campo deve ser preenchido")
        return false
    }
}