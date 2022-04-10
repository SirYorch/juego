

    function repartir(){

        mesa.innerHTML = `   `
        let nivel = grupo
    if(nivel == 1){conjunto = conjuntoUno.concat(conjuntoUno)} 
    else if(nivel==2){ conjunto = conjuntoDos.concat(conjuntoDos)}
    else if(nivel==3){ conjunto = conjuntoTres.concat(conjuntoTres)}
    else if(nivel == 4){conjunto = conjuntoCuatro.concat(conjuntoCuatro)}

    conjunto.sort(function(){return 0.5-Math.random()})

    conjunto.forEach(function(element){
        
        let tarjeta = document.createElement(`div`);
        let divisor = `<div class="contenido">${element}</div>`;
        tarjeta.classList.add(`carta`);
        tarjeta.innerHTML = divisor;
        mesa.appendChild(tarjeta);

        tarjeta.addEventListener(`click`,abrir);
        function abrir(){
            let descubierta;
            let cartaAbierta = document.querySelectorAll(`.carta`)
            tarjeta.classList.add(`abierta`);
            descubierta =  document.querySelectorAll(`.abierta`)
            let completa;
            if(descubierta.length==2){
            if(descubierta[0].textContent == descubierta[1].textContent ){
                    descubierta[0].classList.add(`completa`);
                    descubierta[1].classList.add(`completa`);
                    descubierta[0].classList.remove(`abierta`);
                    descubierta[1].classList.remove(`abierta`);
                    completa = document.querySelectorAll(`.completa`)
                    if(completa.length == cartaAbierta.length && nivel <5){
                        nivel++;
                        desplegarMenu();
                        mesa.innerHTML = ``

                    }
            }else {
            setTimeout(
            function(){
            descubierta[0].classList.remove(`abierta`);
            descubierta[1].classList.remove(`abierta`)},700);
        }
            }
    };})}

