let menu = document.querySelector(`.menu`);
let siguiente = document.querySelector(`.siguiente`);
let principal = document.querySelector(`.principal`);
function desplegarMenu(){
    menu.classList.toggle(`desactivado`)
        bajar()
    }
function siguienteNivel(){
    menu.classList.toggle(`desactivado`);
        grupo +1 ; 
        repartir(grupo)
}

principal.addEventListener(`click`, siguienteNivel);
siguiente.addEventListener(`click`, desplegarMenu);