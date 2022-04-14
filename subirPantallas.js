function subirPantallaInicial(){
    pantallaInicial.classList.toggle(`desactivado`)
}
function subirPantallaMenu(){
    pantallaMenu.classList.toggle(`desactivado`)
}
function subirPantallaPerder(){
    pantallaPerder.classList.toggle(`desactivado`);
    clearInterval(intervalo)
}
