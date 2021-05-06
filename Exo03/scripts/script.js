let prixHT = prompt("Veuillez entrer le prix du livre, hors taxe : ");
let quantite = prompt("Veuillez indiquer la quantité de livres : ");

let totalHT = prixHT * quantite
let total = totalHT + (totalHT * 0.21);

alert("Le total, TVA comprise, est de " + total);