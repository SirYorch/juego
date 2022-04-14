function generarCartas(){

// cambiarle el nivel a un ++ y ponerle el 1 solo al inicio

    mesa.innerHTML = `  `

    let conjunto;

    if(nivel==1){
        conjunto = conjuntoUno.concat(conjuntoUno)
    } else if(nivel==2){
        conjunto = conjuntoDos.concat(conjuntoDos)
    } else if(nivel==3){
        conjunto = conjuntoTres.concat(conjuntoTres)
    } else if(nivel==4){
        conjunto = conjuntoCuatro.concat(conjuntoCuatro)
    }

  conjunto.sort(function(){
       return 0.5-Math.random()
   })

    conjunto.forEach(
        function(element){
            let carta = document.createElement(`div`);
            carta.classList.add(`carta`);
//            carta.classList.add(`abierta`)
            carta.innerHTML = `<div class="contenido">${element}</div>`;
            mesa.appendChild(carta)
        }     );

}

let carta = document.querySelectorAll(`.carta`);

// funcion abrir se debe activar despues de selesccionar las cartas
function abrir(){
    this.classList.add(`abierta`);
    comprobar();
}

//function comprobar
function comprobar(){

    let abiertas = document.querySelectorAll(`.abierta`);
    if(abiertas.length == 2 && abiertas[0].textContent == abiertas[1].textContent){
    abiertas[0].classList.add(`completa`)
    abiertas[1].classList.add(`completa`)
    setTimeout(function(){abiertas[1].classList.remove(`abierta`)
    abiertas[0].classList.remove(`abierta`)},300)
    } else if(abiertas.length == 2 && abiertas[0].textContent != abiertas[1].textContent){
    setTimeout(function(){abiertas[1].classList.remove(`abierta`)
    abiertas[0].classList.remove(`abierta`)},1000);
    contarVidas()
} else {
    return
}

let completas = document.querySelectorAll(`.completa`)

if(carta.length == completas.length){
        subirPantallaMenu();
        clearInterval(intervalo)
}

}

