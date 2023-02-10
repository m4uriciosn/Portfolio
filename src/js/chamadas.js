// Botão Ver Mais

const escondido = document.getElementById('div-escondido');
const ver = document.getElementById('ver')

function vermais() {
    if (escondido.style.display === "none") {
    escondido.style.display='flex';
    ver.innerHTML='ver menos'
    } else {
        escondido.style.display='none';
        ver.innerHTML='ver mais'
    }
}

// botão responsivo

function openMenu() {
    document.querySelector(".menu-responsivo").style.height = '100vh';
}

function fechaMenu() {
    document.querySelector(".menu-responsivo").style.height = '0';
}

// chamada dos botões de redes sociais e contatos

function chamarlinkedin(){
    window.location = 'https://www.linkedin.com/in/maurício-sosmaiar-nascimento-/'
}

function chamarInstagram(){
    window.location = 'https://www.instagram.com/m4uriciosn/'
}

function chamarFlex(){
    window.location = 'https://flex-transportes.netlify.app'
}

function chamarMario(){
    window.location = 'https://projeto-mario.netlify.app'
}

function chamarGithub(){
    window.location = 'https://github.com/m4uriciosn?tab=repositories'
}

function chamarEnigma(){
    window.location = 'https://pre-alpha-codigo-safe.netlify.app'
}

function chamarDark(){
    window.location = 'https://projeto-dark-souls.netlify.app'
}

function chamarPercy() {
    window.location = 'https://m4uriciosn.github.io/Percy-Jackson/'
}