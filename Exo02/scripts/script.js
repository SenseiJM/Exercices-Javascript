let chaine = "ma formation javascript";

console.log(chaine.search(/ma/)); //Position de "ma"
console.log(chaine.search(/p/)); //Position de 'p'
console.log(chaine.charAt(21)); //Lettre située à la position 21
console.log(chaine.replace(/javascript/, "Java")); //Remplacer "javascript" par "Java"
console.log(chaine.split(" ")); //Découpe de la chaîne avec le délimiteur " " (espace)
//Inverser la chaine de caractères
let tab = chaine.split(""); //Mettre les caractères dans un tableau
tab.reverse(); //Inversion de l'ordre du tableau
chaine = tab.toString(); //Transformation du tableau en chaîne de caractères, avec des virgules entre chaque caractère
chaine = chaine.replace(/,/g, ""); //Remplacement des "," par "" de manière globale (g) dans toute la string
console.log(chaine); //Affichage de la nouvelle string