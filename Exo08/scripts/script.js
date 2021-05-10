let titre = document.getElementsByTagName("title")[0];
let h1 = document.createElement("h1");
let h1_2 = document.createElement("h1");

let timer1 = 1000;
let timer2 = 1000;
/*
setTimeout(
    function() {
        titre.innerText = `${heures} : ${minutes} : ${secondes}`;
        document.body.appendChild(titre);

        temps = new Date();
        heures = temps.getHours();
        minutes = temps.getMinutes();
        secondes = temps.getSeconds();
    },
    1000
);
*/

setInterval(
    function () {
        let temps = new Date();
        let heures;

        if (temps.getHours() != heures) {
            heures = temps.getHours();
        }

        let minutes;

        if (temps.getMinutes() != minutes) {
            minutes = temps.getMinutes();
        }

        let secondes;

        if (temps.getSeconds() != secondes) {
            secondes = temps.getSeconds();
        }

        let dateJour;

        if (temps.getDate() != dateJour) {
            dateJour = temps.getDate();
        }

        let valeurMois;
        let moisChange = false;

        if (temps.getMonth() != valeurMois) {
            valeurMois = temps.getMonth();
            moisChange = true;
        }

        let valeurJour;
        let jourChange = false;

        if (temps.getDay() != valeurJour) {
            valeurJour = temps.getDay();
            jourChange = true;
        }

        let annee = temps.getFullYear();
        let mois;
        let jour;
        
        if (moisChange) {
            switch (valeurMois) {
                case 0:
                    mois = "janvier";
                    break;
                case 1:
                    mois = "février";
                    break;
                case 2:
                    mois = "mars";
                    break;
                case 3:
                    mois = "avril";
                    break;
                case 4:
                    mois = "mai";
                    break;
                case 5:
                    mois = "juin";
                    break;
                case 6:
                    mois = "juillet";
                    break;
                case 7:
                    mois = "août";
                    break;
                case 8:
                    mois = "septembre";
                    break;
                case 9:
                    mois = "octobre";
                    break;
                case 10:
                    mois = "novembre";
                    break;
                case 11:
                    mois = "décembre";
                    break;
            }
        }
        
        if (jourChange) {
            switch (valeurJour) {
                case 0:
                    jour = "dimanche";
                    break;
                case 1:
                    jour = "lundi";
                    break;
                case 2:
                    jour = "mardi";
                    break;
                case 3:
                    jour = "mercredi";
                    break;
                case 4:
                    jour = "jeudi";
                    break;
                case 5:
                    jour = "vendredi";
                    break;
                case 6:
                    jour = "samedi";
                    break;
            }
        }

        let messageHeure = `${heures} : ${(minutes<10)? "0" + minutes : minutes} : ${(secondes<10)? "0" + secondes : secondes}`;

        titre.innerText = messageHeure;
        h1.innerText = `${jour} ${dateJour} ${mois} ${annee}`;
        document.body.appendChild(h1);
        h1_2.innerText = messageHeure;
        document.body.appendChild(h1_2);

        
        //clearInterval(t);
        
    }, 
timer1);

let t = setInterval(
    function() {
        console.log("hello");
        //clearInterval(timer2);
    }, 
timer2);

//Non terminé