function inverser(chaine) {
    tab = chaine.split("");
    tab.reverse();
    return chaine = tab.join("");
}

let chaine = prompt("Veuillez entrer une chaîne de caractères à inverser : ");
console.log(inverser(chaine));
alert(inverser(chaine));