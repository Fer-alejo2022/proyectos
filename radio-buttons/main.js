const r1 = document.getElementById("buton");
const r2 = document.getElementById("buton2");

r1.addEventListener('click', (e) => {
    e.preventDefault();
    alert("SE PRESIONO EL BOTON 1");
})

r2.addEventListener('click',(e) => {
    e.preventDefault();
    alert("SE PRESIONO EL BOTON 2");
})