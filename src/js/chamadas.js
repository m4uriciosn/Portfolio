// Botão Ver Mais

const escondido = document.getElementById('div-escondido');
const ver = document.getElementById('ver');

function vermais() {
    if (escondido.style.display == "none") {
    escondido.style.display='flex';
    ver.innerHTML='ver menos';
    } else {
        escondido.style.display='none';
        ver.innerHTML='ver mais';
    }
}

// Botões do menu responsivo

function openMenu() {
    document.querySelector(".menu-responsivo").style.height = '100%';
    document.querySelector(".btn-menu").style.display='none';
}

function fechaMenu() {
    document.querySelector(".menu-responsivo").style.height = '0';
    document.querySelector(".btn-menu").style.display='block';
}

function removerBtn() {
    const x = document.querySelector(".menu-responsivo");
    const btn = document.querySelector(".btn-menu");
    if (window.innerWidth >= 650) {
        btn.style.display='none';
    } else if (window.innerWidth >= 650 || x.style.height=='100%') {
        btn.style.display='none';
    } else {
        btn.style.display='block';
    }
}

// Chamada dos botões de redes sociais e projetos

const linkedin = 'https://www.linkedin.com/in/maurício-sosmaiar-nascimento-/';
const instagram = 'https://www.instagram.com/m4uriciosn/'
const instagramFake = 'https://instagram-menos-que-original.netlify.app';
const flex = 'https://flex-transportes.netlify.app';
const mario = 'https://projeto-mario.netlify.app';
const git = 'https://github.com/m4uriciosn?tab=repositories';
const enigma = 'https://pre-alpha-codigo-safe.netlify.app';
const dark = 'https://projeto-dark-souls.netlify.app';
const percy = 'https://m4uriciosn.github.io/Percy-Jackson/';

function chamarlinkedin(){
    window.location = linkedin;
}
function chamarInstagram() {
    window.location = instagram
}
function chamarInstagramFake(){
    window.location = instagramFake;
}
function chamarFlex(){
    window.location = flex;
}
function chamarMario(){
    window.location = mario;
}
function chamarGithub(){
    window.location = git;
}
function chamarEnigma(){
    window.location = enigma;
}
function chamarDark(){
    window.location = dark;
}
function chamarPercy() {
    window.location = percy;
}