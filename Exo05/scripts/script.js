let tailleSapin = prompt("Entrez une valeur pour la taille de votre sapin : ");

for (let row = 0; row <= tailleSapin; row++) {

    let nbCarac = 0;
    let message = "";

    do {
        message += "A"
        nbCarac++;
    } while (nbCarac < row);
    
    console.log(message);
}

//Sapin complet, version Formateur

var sapin = "A";

var taille = 10;

var espace = taille - 1;

var indSapin = 1;

var vide = " "

for(var i = taille; i > 0; i--, espace--, indSapin += 2 ) {

    console.log(vide.repeat(espace) + sapin.repeat(indSapin));

    // sapin += "A";

}