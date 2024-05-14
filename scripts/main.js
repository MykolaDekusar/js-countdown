'use strict';
let contatore = 10;
const timer = document.getElementById('countDown');
const mostraBuonAnno = document.getElementById('buonAnno');
const stopTimer = document.getElementById('stop');
//al click fermo il timer e mostro buonanno
stopTimer.addEventListener('click', function () {
    clearInterval(counter);
    timer.classList.add('hide');
    mostraBuonAnno.classList.remove('hide');
})

const counter = setInterval(decreaseTime, 1000);
function decreaseTime() {
    if (contatore === 0) {
        clearInterval(counter);
        timer.classList.add('hide');
        mostraBuonAnno.classList.remove('hide');
    }
    console.log(contatore);
    timer.innerText = contatore;
    contatore--;
}

