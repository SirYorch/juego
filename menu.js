let menu = document.querySelector(`.menu`);
let siguiente = document.querySelector(`.siguiente`);
let principal = document.querySelector(`.principal`);
function desplegarMenu(){
    menu.classList.toggle(`desactivado`)
    }
function siguienteNivel(){
    menu.classList.toggle(`desactivado`);
    grupo++;
    repartir();
}

function menuPrincipal(){
    menu.classList.toggle(`desactivado`);
    subir()
}
principal.addEventListener(`click`, menuPrincipal);
siguiente.addEventListener(`click`, siguienteNivel);