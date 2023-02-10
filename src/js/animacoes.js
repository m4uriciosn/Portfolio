
// Animar elementos da tela com atributo data-anima

const item = document.querySelectorAll("[data-anima]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", ()=>{
    animeScroll()
})