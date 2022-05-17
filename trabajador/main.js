const form = document.getElementById("formulario");
const codigo = document.getElementById("codigo");
const hora = document.getElementById("horas");
const costo_hora = document.getElementById("costoHora");
const noValido = document.getElementById("noValido");

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let validar = "";
    let get = false;
    noValido.innerHTML = "";

    if(codigo.value == ""){
       validar += "Codigo no Ingresado";
       get = true; 
    }
    if(hora.value == "") {
       validar += "Número de Horas trabajadas no Ingresadas";
       get = true;
    }
    if (costo_hora == "") {
        validar += "Costo de la Hora no Ingresada";
        get = true;
    }

    if (get){
      noValido.innerHTML = validar;
    } else {
       form.reset();
       bruto();
       neto(); 
    }
})

function bruto(){
    let horasTrabajadas = hora.value;
    let horaCosto = costo_hora.value;
    
}
