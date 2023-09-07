const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

let fechaFinal = "02/10/2024 00:00:00";

let x = setInterval(function(){
    let now = new Date(fechaFinal).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / (1000));


    dias.innerHTML = d;
    horas.innerHTML = h;
    minutos.innerHTML = m;
    segundos.innerHTML = s;

})



