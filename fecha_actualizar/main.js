function actualizar(){
    let fecha = document.lastModified;
    let meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    let fecha_2 = new Date(Date.parse(fecha));
    let dia = fecha_2.getDate();
    let mes = meses[fecha_2.getMonth()];
    return (dia+" de "+mes+" de 2022"); 
}