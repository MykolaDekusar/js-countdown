'use strict';
let contatore = 10;
let click = 0;
const timer = document.getElementById('countDown');
const mostraBuonAnno = document.getElementById('buonAnno');
const stopTimer = document.getElementById('stop');
//al click fermo il timer e mostro buonanno
stopTimer.addEventListener('click', function () {
    clearInterval(counter);
    timer.classList.add('hide');
    mostraBuonAnno.classList.remove('hide');
})


decreaseTime();
const counter = setInterval(decreaseTime, 980);
setTimeout(buonAnno, 10000);
function decreaseTime() {
    if (contatore === 0) {
        clearInterval(counter);
        timer.classList.add('hide');
    }
    timer.innerText = contatore;
    contatore--;
    console.log(contatore);
}

function buonAnno() {
    mostraBuonAnno.classList.remove('hide');
}