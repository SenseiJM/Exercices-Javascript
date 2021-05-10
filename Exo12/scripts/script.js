const start = function() {
    let boutonChaise = document.getElementById("bouton-chaise");
    boutonChaise.addEventListener("click", addChaise);
}

const addChaise = function() {
    let nouvelleChaise = document.createElement("tr");
    document.getElementById("liste-panier").appendChild(nouvelleChaise);

    let chaiseNom = document.createElement("td");
    chaiseNom.innerText = document.getElementById("chaise").firstChild.innerText;

    let chaisePrix = document.createElement("td");
    chaisePrix.innerText = document.getElementById("chaise").firstChild.nextSibling.innerText;

    document.getElementById("liste-panier").appendChild(chaiseNom);
    document.getElementById("liste-panier").appendChild(chaisePrix);
    console.log("Terminé d'exécuter addChaise")
}

window.onload = start;

//Non terminé