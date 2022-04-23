const cor = document.getElementById("correo");
const nombre = document.getElementById("name");
const usuarios = document.getElementById("usuario");
const contrasena = document.getElementById("clave");
const form = document.getElementById("formulario");

const expresiones_regulares = {
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46];

    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial)
        event.returnValue= false;
}

form.addEventListener("submit", (e) => {
    const alert = document.getElementById("alerta");
    
    e.preventDefault();
    let peligro = "";
    let entrar = false;
    alert.innerHTML = "";
    
    if (!expresiones_regulares.correo.test(cor.value)) {
        peligro += " el correo no es valido <br>";
        entrar = true;
    } 
     if( nombre.value.length < 2) {
        peligro += "Complete el Campo Nombre, Nombre muy Corto <br>";
        entrar = true;
    }
    if(usuarios.value.length < 5 ) {
        peligro += "Complete el campo usuario, usuario muy corto <br>";
        entrar = true;

    } 
    if(contrasena.value.length < 4) {
         peligro += "Complete el campo Contraseña, Contraseña muy corta <br>";
         entrar = true;   
    }

    if(entrar) {
         alert.innerHTML = peligro;
    } else {
        form.reset();
        alert.innerHTML = "Registro Existoso"
        alert.style.color = "#3f729b";
        alert.style.right = "5px"
    }
})
