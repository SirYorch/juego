    // ELIMINAR EL MENU

    let inicioNormal = document.querySelector(`.normal`);
    let inicioFacil = document.querySelector(`.facil`)
    let pantalla = document.querySelector(`.inicio`);
    let grupo = 1 ;
    function subir(){
        pantalla.classList.toggle(`desactivado`);
        repartir()
    }
    function bajar(){
        pantalla.classList.toggle(`desactivado`)
    }
    inicioNormal.addEventListener(`click`,subir)
    inicioFAcil.addEventListener(`click`,subir)
