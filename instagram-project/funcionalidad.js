const email = document.getElementById("email");
const name = document.getElementById("name");
const users = document.getElementById("users");
const password = document.getElementById("password");
const form = document.getElementById("form");

const regular_expressions = {
	em: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

function only_letters(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letters = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    special = [8, 37, 39, 46];

    key_special = false
    for(var i in special) {
        if(key == special[i]) {
            key_special = true;
            break;
        }
    }

    if(letters.indexOf(tecla) == -1 && !key_special)
        event.returnValue= false;
}

form.addEventListener("submit", (e) => {
    const alert = document.getElementById("alert");
    
    e.preventDefault();
    let warning = "";
    let get = false;
    alert.innerHTML = "";
    
    if (!regular_expressions.em.test(email.value)) {
        warning += "the email is not valid <br>";
        get = true;
    } 
     if(name.value.length < 2) {
        warning += "fill in the name field, very short name <br>";
        get = true;
    }
    if(users.value.length < 5 ) {
        warning += "fill in the users field, very short users <br>";
        get = true;

    } 
    if(password.value.length < 4) {
         warning += "fill in the password field, very short password <br>";
         get = true;   
    }

    if(get) {
         alert.innerHTML = warning;
    } else {
        form.reset();
        alert.innerHTML = "Successful registration";
        alert.style.color = "#3f729b";
        alert.style.right = "5px"
    }
})
