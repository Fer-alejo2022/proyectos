const caja = document.getElementById("casilla");
const texto = document.getElementById("text");
const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
      e.preventDefault();
        if(caja.value == ""){
            texto.style.color = "#ff0000";
            return texto.innerHTML = "No se ha ingresado nada";
        } else {
           if (caja.value != ""){
               texto.style.color = "#0000ff";
               return texto.innerHTML = caja.value;
          }
      }
})