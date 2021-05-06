//alert("Bienvenue sur mon site web !");

/*
    prompt(); --> permet de défininr une valeur
    prompt("Quel est votre film préféré?");
    Va permettre à l'utilisateur de donner une valeur, et la récupérera.
*/

//Convertisseur binaire - décimal - hexadécimal avec le prompt()

let valeurEntree = prompt("Veuillez entrer une valeur à convertir : ");
let baseValeurEntree = prompt("Quelle est la base de la valeur entrée ? ");
let valeurConvertie = parseInt(valeurEntree, baseValeurEntree);
alert("La valeur en base décimale est : " + valeurConvertie);