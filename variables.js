let conjuntoUno = [`🖤`,`😎`,`😂`]
//,`👩‍🚀`,`🎀`,`🍔`,`🚀`];
let conjuntoDos = conjuntoUno.concat([`💜`,`😍`,`🎩`]);
let conjuntoTres = conjuntoDos.concat([`🎄`,`😭`,`💚`]);
let conjuntoCuatro = conjuntoTres.concat([`🥪`,`💊`,`🚴‍♀️`]);



let pantallas = document.querySelectorAll(`.inicio`)


// dos botones          juego normal y juego facil
let pantallaInicial = document.querySelector(`#inicio`);

let normal = document.querySelector(`.normal`);
let facil = document.querySelector(`.facil`);


// dos botones         menu principal y siguiente nivel
let pantallaMenu = document.querySelector(`.menu`);

let principal = document.querySelectorAll(`.principal`);
let siguiente = document.querySelector(`.siguiente`);


// un boton            menu principal           el boton de menu es el mismo de menu;
let pantallaPerder = document.querySelector(`.final`);


//  CONTADOR        
let temporizador = document.querySelector(`.contador`)
let minutero = document.querySelector(`.minutero`);
let segundero = document.querySelector(`.segundero`);

let vida = document.querySelector(`.vidas`)

// atajo   
let botonAtajo = document.querySelector(`.atajo`);
let niveles = document.querySelector(`.niveles`);


// MESA 
let mesa = document.querySelector(`.mesa`);

//TIEMPO 
let vidas = 9;
let minutos = 1;
let segundos = 30;