let chrono = document.getElementById("chrono");
let millisecondes = 0;
let secondes = 0;
let minutes = 0;
let messageMinutes = "";
let messageSecondes = "";
let messageMillisecondes = "";
let intervalle;

function demarrerChronometre() {

    intervalle = setInterval(function() {

        if (millisecondes > 99) {
            millisecondes = 0;
            secondes++;
        }

        if (secondes > 59) {
            secondes = 0;
            minutes++;
        }

        if(millisecondes < 10) {
            messageMillisecondes = `0${millisecondes}`;
        } else {
            messageMillisecondes = `${millisecondes}`;
        }

        if (secondes < 10) {
            messageSecondes = `0${secondes}`;
        } else {
            messageSecondes = `${secondes}`;
        }

        if (minutes == 0) {
            messageMinutes = "0";
        } else {
            messageMinutes = `${minutes}`;
        }

        chrono.innerText = `${messageMinutes}:${messageSecondes}:${messageMillisecondes}`;

        millisecondes++;

    }, 1)

}

function arreterChronometre() {

    clearInterval(intervalle);

}

function reinitialiserChronometre() {

    arreterChronometre();
    chrono.innerText = "--:--:--";
    millisecondes = 0;
    secondes = 0;
    minutes = 0;

}