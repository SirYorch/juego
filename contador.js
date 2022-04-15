function contar(){

    minutero.innerHTML = `  `;
    minutero.innerHTML = minutos;
    segundero.innerHTML = `  `;
    segundero.innerHTML = segundos;
    function contarSegundos(){
        segundero.innerHTML = `  `;
        segundos--;
        segundero.innerHTML = segundos
        if( segundos == 0 && minutos == 0){
            subirPantallaPerder();
            clearInterval(intervalo)

        } else if( segundos ==0 && minutos > 0){
            minutos--;
            segundos=59;
            minutero.innerHTML = `  `;
            minutero.innerHTML = minutos
        } 
    }
setTimeout(function(){intervalo = setInterval(contarSegundos, 1000)},1800)
}

function contarVidas(){
    vida.innerHTML = `  `;
    vidas--;
    vida.innerHTML = vidas;
    if(vidas==0){
        subirPantallaPerder();
    }
}