
function aritmetica(numero1,numero2) {

     let result_suma = parseFloat(numero1 + numero2);
     let result_resta = parseFloat(numero1 - numero2);
     let result_multi = parseFloat(numero1 * numero2);
     let result_divi = parseFloat(numero1 / numero2);

     document.write("SUMA : "+result_suma+" <br> RESTA : "+result_resta+" <br> MULTIPLICACIÓN : "+result_multi+" <br> DIVISIÓN : "+result_divi);

}

function ejecutar() {

    const numbers1 = parseFloat(document.getElementById('num1').value);
    const numbers2 = parseFloat(document.getElementById('num2').value);

        aritmetica(numbers1,numbers2);
}
