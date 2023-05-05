// MENU ATÉ 768px

const btnMobile = document.querySelector('#btn-mobile')
const menu = document.querySelector('#menu')

const toggleMenu = (event) => {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('#navMenu')
    nav.classList.toggle('active')
}

const desktopActive = () => {
    const body = document.querySelector('body')
    body.classList.toggle('desktop')
}

const checkDevice = () => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        desktopActive()
        return false
    }
}

const device = checkDevice()

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


// Distância scroll das sections
const galeraMenu = document.querySelectorAll('#menu a')

const scrollTop = (event) => {
    event.preventDefault()
    const href = event.target.getAttribute('href')
    const distanciaDoTopo = document.querySelector(href).offsetTop;
    const alturaHeader = +window.getComputedStyle(document.querySelector('header')).height.replace('px','')
    console.log(alturaHeader);

    window.scrollTo({
        top: distanciaDoTopo - alturaHeader
    })
}

galeraMenu.forEach(element => {
    element.addEventListener('click', scrollTop)
});


// voltar para home

const vaiPraHome = () => {
    window.scrollTo({
        top: 0
    })
}

const logoHome = document.querySelectorAll('.logoMenu')

logoHome.forEach(element => {
    element.addEventListener('click', vaiPraHome)
})