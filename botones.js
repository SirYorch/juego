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


})

}
function inicioFacil(){
    subirPantallaInicial();
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
    element.addEventListener(`click`,abrir)
    botonAtajo.classList.add(`desactivado`)}
    )}
);
nivelDos.addEventListener(`click`,function(){
    nivel = 2;
    generarCartas()
    carta = document.querySelectorAll(`.carta`);
    //funcion para que cada carta que se cree tenga la funcion de abrir
    carta.forEach(function(element){
    element.addEventListener(`click`,abrir)
    botonAtajo.classList.add(`desactivado`)}
    )
});
nivelTres.addEventListener(`click`,function(){
    nivel = 3;
    generarCartas()
    carta = document.querySelectorAll(`.carta`);
    //funcion para que cada carta que se cree tenga la funcion de abrir
    carta.forEach(function(element){
    element.addEventListener(`click`,abrir)
    botonAtajo.classList.add(`desactivado`)}
    )
});
nivelCuatro.addEventListener(`click`,function(){
    nivel = 4;
    generarCartas()
    carta = document.querySelectorAll(`.carta`);
    //funcion para que cada carta que se cree tenga la funcion de abrir
    carta.forEach(function(element){
    element.addEventListener(`click`,abrir)
    botonAtajo.classList.add(`desactivado`)}
    )
});

function inicio(){
    let dos = 2;
    let suma = dos + dos; 
    subirPantallaInicial();
    function s(){
        pantallaMenu.classList.add(`desactivado`)
    }
    function d(){
        pantallaPerder.classList.add(`desactivado`)
    }
    s();
    d();
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
