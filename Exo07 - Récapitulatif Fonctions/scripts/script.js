let veutContinuer;
let tabValeurs = new Array();
let nbValeurs = 1;
let valeurLue;

do {
    
    valeurLue = prompt(`Veuillez entrer une ${nbValeurs}e valeur numérique : `);
    
    while (valeurLue === NaN) {
        valeurLue = prompt(`Valeur Incorrecte.\nVeuillez entrer une ${nbValeurs}e valeur numérique : `);
    }
    
    tabValeurs.push(valeurLue);

    valeurLue = prompt(`Valeur enregistrée. Voulez-vous entrer une nouvelle valeur ? (0 pour non, 1 pour oui)`);
    
    while (valeurLue != 0 && valeurLue != 1) {
        
        valeurLue = prompt(`Valeur incorrecte. Voulez-vous entrer une nouvelle valeur ? (0 pour non, 1 pour oui)`);
        
    }
    
    if (valeurLue == 1) {
        veutContinuer = true;
    } else {
        veutContinuer = false;
    }
    
    nbValeurs++;
    
} while (veutContinuer);

let tabInverse = tabValeurs.slice();
inverserOrdre(tabInverse);
let tabTrie = tabValeurs.slice();
trierValeurs(tabTrie);

let message = `Somme des valeurs : ${calculerSomme(tabValeurs)}\nMoyenne des valeurs : ${calculerMoyenne(tabValeurs)}\nTableau de valeurs avec ordre inversé : ${tabInverse.join("|")}\nTableau Trié : ${tabTrie.join("|")}`;

alert(message);

function calculerSomme(tableauValeurs) {
    
    let somme = 0;

    for (let index = 0; index < tableauValeurs.length; index++) {
        
        somme += parseInt(tableauValeurs[index]);

    }

    return somme;

}

function calculerMoyenne(tableauValeurs) {
    
    let somme = calculerSomme(tableauValeurs);
    let moyenne = somme / tableauValeurs.length;

    return moyenne;

}

function inverserOrdre(tableauValeurs) {
    
    return tableauValeurs.reverse();

}

function trierValeurs(tableauValeurs) {

    return tableauValeurs.sort(function(a,b){return a-b});

}