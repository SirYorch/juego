function inicioNormal(){
// dificultad

    vidas = 5;
    minutos = 1;
    segundos = 30;



    subirPantallaInicial();
    // contadores
    contar();
    contarVidas();
    
    // las cartas se deben seleccionar despues de generarlas
    nivel = 1;

    generarCartas();
    
    carta = document.querySelectorAll(`.carta`);
    //funcion para que cada carta que se cree tenga la funcion de abrir
    carta.forEach(function(element){
    element.addEventListener(`click`,abrir)
    botonAtajo.classList.add(`desactivado`)
    temporizador.classList.toggle(`desactivado`,false);
    vida.classList.toggle(`desactivado`,false)


})

}
function inicioFacil(){
    subirPantallaInicial();
    botonAtajo.classList.toggle(`desactivado`,false)

    nivel = 1;

    // las cartas se deben seleccionar despues de generarlas
    generarCartas();
    carta = document.querySelectorAll(`.carta`);
    carta.forEach(function(element){
    element.addEventListener(`click`,abrir)
    
    })
    temporizador.classList.add(`desactivado`);
    vida.classList.add(`desactivado`)
    let intervalo = 0;
};

normal.addEventListener(`click`,inicioNormal);
facil.addEventListener( `click`,inicioFacil);



function desplegarNiveles(){
    niveles.classList.toggle(`oculto`)
};
botonAtajo.addEventListener(`click`,desplegarNiveles);


let nivelUno = document.querySelector(`.uno`);
let nivelDos = document.querySelector(`.dos`);
let nivelTres = document.querySelector(`.tres`);
let nivelCuatro = document.querySelector(`.cuatro`);




nivelUno.addEventListener(`click`, function(){
    nivel = 1;
    generarCartas()
    carta = document.querySelectorAll(`.carta`);
    //funcion para que cada carta que se cree tenga la funcion de abrir
    carta.forEach(function(element){
    element.addEventListener(`click`,abrir);
    niveles.classList.toggle(`oculto`)
    }
    )}
);
nivelDos.addEventListener(`click`,function(){
    nivel = 2;
    generarCartas()
    carta = document.querySelectorAll(`.carta`);
    //funcion para que cada carta que se cree tenga la funcion de abrir
    carta.forEach(function(element){
    element.addEventListener(`click`,abrir);
    niveles.classList.toggle(`oculto`)
    }
    )
});
nivelTres.addEventListener(`click`,function(){
    nivel = 3;
    generarCartas()
    carta = document.querySelectorAll(`.carta`);
    //funcion para que cada carta que se cree tenga la funcion de abrir
    carta.forEach(function(element){
    element.addEventListener(`click`,abrir);
    niveles.classList.toggle(`oculto`)
    }
    )
});
nivelCuatro.addEventListener(`click`,function(){
    nivel = 4;
    generarCartas()
    carta = document.querySelectorAll(`.carta`);
    //funcion para que cada carta que se cree tenga la funcion de abrir
    carta.forEach(function(element){
    element.addEventListener(`click`,abrir);
    niveles.classList.toggle(`oculto`)
    }
    )
});

function inicio(){
    subirPantallaInicial();;
    pantallaMenu.classList.add(`desactivado`);
    pantallaPerder.classList.add(`desactivado`);
}

principal[0].addEventListener(`click`,inicio)
principal[1].addEventListener(`click`,inicio)


function siguienteNivel(){
    vidas = vidas + 5;
    contarVidas();
    subirPantallaMenu()
    nivel = nivel+1;
    generarCartas();
    carta = document.querySelectorAll(`.carta`);
    //funcion para que cada carta que se cree tenga la funcion de abrir
    carta.forEach(function(element){
    element.addEventListener(`click`,abrir)
    botonAtajo.classList.add(`desactivado`);
    
})
contar()
}


siguiente.addEventListener(`click`,siguienteNivel)
