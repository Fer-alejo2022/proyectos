function cambioColor(fondo,letras){
    let ind;
    ind = fondo.selectedIndex;
    document.bgColor = fondo.options[ind].value;
    ind = letras.selectedIndex;
    document.fgColor = letras.options[ind].value;
    return;

}