'use strict';
let contatore = 10;
const timer = document.getElementById('countDown');
const mostraBuonAnno = document.getElementById('buonAnno');
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
}


function buonAnno() {
    mostraBuonAnno.classList.remove('hide');
}

