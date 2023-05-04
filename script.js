// MENU ATÉ 768px

const btnMobile = document.querySelector('#btn-mobile')
const menu = document.querySelector('#menu')

const toggleMenu = (event) => {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('#navMenu')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
menu.addEventListener('click', toggleMenu)


// FORMULÁRIO

const enviarFormulario = (event) => {
    event.preventDefault()
    const userNome = document.querySelector('#nome')
    const userEmail = document.querySelector('#email')
    const userTelefone = document.querySelector('#telefone')
    const userAssunto = document.querySelector('#assunto')
    const userMensagem = document.querySelector('#mensagem')

    if (!(userNome.value && userEmail.value && userTelefone.value && userAssunto.value && userMensagem.value)) {
        alert(`Favor preencher todos os campos do formulário!`)

        userNome.value === '' ? userNome.focus() :
        userEmail.value === '' ? userEmail.focus() :
        userTelefone.value === '' ? userTelefone.focus() :
        userAssunto.value === '' ? userAssunto.focus() : userMensagem.focus()

    } else {
        alert(`Entraremos em contato através do e-mail ${userEmail.value}`)

        userNome.value = ''
        userEmail.value = ''
        userTelefone.value = ''
        userAssunto.value = ''
        userMensagem.value = ''
    }
}

const btnFormulario = document.querySelector('#botaoFormulario input')

