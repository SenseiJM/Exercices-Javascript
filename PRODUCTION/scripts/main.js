const start = function() {

    //récupération des boutons d'ajout dans le fichier HTML
    let boutonInfosPerso = document.getElementById("btn-infos-perso");
    //Ajout de l'action si le bouton est cliqué
    boutonInfosPerso.addEventListener("click", ajouterInfoPerso);

    let boutonCompetenceLiee = document.getElementById("btn-competence-liee");
    boutonCompetenceLiee.addEventListener("click", ajouterCompetenceLiee);

    let boutonCompetenceNonLiee = document.getElementById("btn-competence-non-liee");
    boutonCompetenceNonLiee.addEventListener("click", ajouterCompetenceNonLiee);

    let boutonExperience = document.getElementById("btn-experience");
    boutonExperience.addEventListener("click", ajouterExperience);

    let boutonFormation = document.getElementById("btn-formation");
    boutonFormation.addEventListener("click", ajouterFormation);

    let boutonHobby = document.getElementById("btn-hobby");
    boutonHobby.addEventListener("click", ajouterHobby);
}

//fonctions des boutons

const ajouterInfoPerso = function() {

    //Récupérer la liste
    let liste = document.getElementById("informations-personnelles").getElementsByTagName("ul")[0];

    //Récupération de la nouvelle donnée
    let nouvelElement = document.getElementById("nouvelle-info-perso").value;

    //Validation de la nouvelle donnée
    let elementCorrect = validerEntree(nouvelElement);

    //Si la donnée est correcte, on exécute ceci : 
    if (elementCorrect) {

        //Création d'un nouvel élément de liste
        let nouveauLi = document.createElement("li");

        //Attribution de la nouvelle donnée
        nouveauLi.innerText = nouvelElement;

        //Insertion de la nouvelle donnée
        liste.appendChild(nouveauLi);
    }
    
    //Remise à zéro de l'espace d'entrée utilisateur
    document.getElementById("nouvelle-info-perso").value = "";

}

const ajouterCompetenceLiee = function() {

    //Récupérer la liste
    let liste = document.getElementById("competences-liees").getElementsByTagName("ul")[0];

    //Récupération de la nouvelle donnée
    let nouvelElement = document.getElementById("nouvelle-competence-liee").value;

    //Validation de la nouvelle donnée
    let elementCorrect = validerEntree(nouvelElement);

    //Si la donnée est correcte, on exécute ceci : 
    if (elementCorrect) {

        //Création d'un nouvel élément de liste
        let nouveauLi = document.createElement("li");

        //Attribution de la nouvelle donnée
        nouveauLi.innerText = nouvelElement;

        //Insertion de la nouvelle donnée
        liste.appendChild(nouveauLi);
    }
    
    //Remise à zéro de l'espace d'entrée utilisateur
    document.getElementById("nouvelle-competence-liee").value = "";
}

const ajouterCompetenceNonLiee = function() {

    //Récupérer la liste
    let liste = document.getElementById("competences-non-liees").getElementsByTagName("ul")[0];

    //Récupération de la nouvelle donnée
    let nouvelElement = document.getElementById("nouvelle-competence-non-liee").value;

    //Validation de la nouvelle donnée
    let elementCorrect = validerEntree(nouvelElement);

    //Si la donnée est correcte, on exécute ceci : 
    if (elementCorrect) {
        
        //Création d'un nouvel élément de liste
        let nouveauLi = document.createElement("li");

        //Attribution de la nouvelle donnée
        nouveauLi.innerText = nouvelElement;

        //Insertion de la nouvelle donnée
        liste.appendChild(nouveauLi);
    }
    
    //Remise à zéro de l'espace d'entrée utilisateur
    document.getElementById("nouvelle-competence-non-liee").value = "";
}

const ajouterExperience = function() {

    //Récupération du tableau de données
    let tableau = document.getElementById("experiences").getElementsByTagName("tbody")[0];

    //Récupération des nouvelles données du mini-formulaire
    let nouvelleDate = document.getElementById("nouvelle-date-experience").value;
    let nouvelleEntreprise = document.getElementById("nouvelle-entreprise-experience").value;
    let nouvelleDescription = document.getElementById("nouvelle-description-experience").value;
    let nouveauPoste = document.getElementById("nouveau-poste-experience").value;

    //Validation des données
    let dateCorrecte = validerEntree(nouvelleDate);
    let entrepriseCorrecte = validerEntree(nouvelleEntreprise);
    let descriptionCorrecte = validerEntree(nouvelleDescription);
    let posteCorrect = validerEntree(nouveauPoste);

    //Si TOUTES les données sont correctes, on exécute ceci : 
    if (dateCorrecte && entrepriseCorrecte && descriptionCorrecte && posteCorrect) {

        //Création d'une nouvelle ligne de tableau
        let nouveauTr = document.createElement("tr");
        //Insertion de la nouvelle ligne tout en haut du tableau
        tableau.insertBefore(nouveauTr, tableau.firstChild);

        //Création d'un nouvel élément de tableau
        let nouveauTd = document.createElement("td");
        //Attribution de la nouvelle donnée
        nouveauTd.innerText = nouvelleDate;
        //Insertion de la nouvelle donnée
        nouveauTr.appendChild(nouveauTd);

        //Création d'un nouvel élément de tableau
        let nouveauTd2 = document.createElement("td");
        //Insertion du nouvel élément de tableau
        nouveauTr.appendChild(nouveauTd2);

        //Création d'une nouvelle liste
        let nouveauUl = document.createElement("ul");
        //Insertion de la nouvelle liste dans le nouvel élément de tableau
        nouveauTd.appendChild(nouveauUl);

        //Création d'un nouvel élément de liste
        let nouveauLi = document.createElement("li");
        //Attribution de la nouvelle donnée
        nouveauLi.innerText = nouvelleEntreprise;
        //Insertion de la nouvelle donnée dans la nouvelle liste
        nouveauUl.appendChild(nouveauLi);

        //Création d'un nouvel élément de liste
        let nouveauLi2 = document.createElement("li");
        //Attribution de la nouvelle donnée
        nouveauLi2.innerText = nouvelleDescription;
        //Insertion de la nouvelle donnée dans la nouvelle liste
        nouveauUl.appendChild(nouveauLi2);

        //création d'un nouvel élément de liste
        let nouveauLi3 = document.createElement("li");
        //Attribution de la nouvelle donnée
        nouveauLi3.innerText = nouveauPoste;
        //Insertion de la nouvelle donnée dans la nouvelle liste
        nouveauUl.appendChild(nouveauLi3);
    }

    //Remise à zéro des espaces d'entrée utilisateur
    document.getElementById("nouvelle-date-experience").value = "";
    document.getElementById("nouvelle-entreprise-experience").value = "";
    document.getElementById("nouvelle-description-experience").value = "";
    document.getElementById("nouveau-poste-experience").value = "";

}
/*
const ajouterFormation = function() {

    //Récupération du tableau de données
    let tableau = document.getElementById("formations").getElementsByTagName("tbody")[0];

    //Récupération des nouvelles données du mini-formulaire
    let nouvelleDate = document.getElementById("nouvelle-date-formation").value;
    let nouvelEtablissement = document.getElementById("nouvel-etablissement-formation").value;
    let nouveauTitre = document.getElementById("nouveau-titre-formation").value;

    //Validation des données
    let dateCorrecte = validerEntree(nouvelleDate);
    let etablissementCorrect = validerEntree(nouvelEtablissement);
    let titreCorrect = validerEntree(nouveauTitre);

    //Si TOUTES les données sont correctes, on exécute ceci : 
    if (dateCorrecte && etablissementCorrect && titreCorrect) {

        //Création d'une nouvelle ligne de tableau
        let nouveauTr = document.createElement("tr");
        //Insertion de la nouvelle ligne tout en haut du tableau
        tableau.insertBefore(nouveauTr, tableau.firstChild);

        //Création d'un nouvel élément de tableau
        let nouveauTd = document.createElement("td");
        //Attribution de la nouvelle donnée
        nouveauTd.innerText = nouvelleDate;
        //Insertion de la nouvelle donnée
        nouveauTr.appendChild(nouveauTd);

        //Création d'un nouvel élément de tableau
        let nouveauTd = document.createElement("td");
        //Insertion du nouvel élément de tableau
        nouveauTr.appendChild(nouveauTd);

        //Création d'une nouvelle liste
        let nouveauUl = document.createElement("ul");
        //Insertion de la nouvelle liste dans le nouvel élément de tableau
        nouveauTd.appendChild(nouveauUl);

        //Création d'un nouvel élément de liste
        let nouveauLi = document.createElement("li");
        //Attribution de la nouvelle donnée
        nouveauLi.innerText = nouvelEtablissement;
        //Insertion de la nouvelle donnée dans la nouvelle liste
        nouveauUl.appendChild(nouveauLi);
        
        //Création d'un nouvel élément de liste
        let nouveauLi = document.createElement("li");
        //Attribution de la nouvelle donnée
        nouveauLi.innerText = nouveauTitre;
        //Insertion de la nouvelle donnée dans la nouvelle liste
        nouveauUl.appendChild(nouveauLi);
    }
    
    //Remise à zéro des espaces d'entrée utilisateur
    document.getElementById("nouvelle-date-formation").value = "";
    document.getElementById("nouvel-etablissement-formation").value = "";
    document.getElementById("nouveau-titre-formation").value = "";
}

const ajouterHobby = function() {

    //Récupérer la liste
    let liste = document.getElementById("hobbies").getElementsByTagName("ul")[0];

    //Récupération de la nouvelle donnée
    let nouvelElement = document.getElementById("nouveau-hobby").value;

    //Validation de la nouvelle donnée
    let elementCorrect = validerEntree(nouvelElement);

    //Si la donnée est correcte, on exécute ceci : 
    if (elementCorrect) {
        
        //Création d'un nouvel élément de liste
        let nouveauLi = document.createElement("li");

        //Attribution de la nouvelle donnée
        nouveauLi.innerText = nouvelElement;

        //Insertion de la nouvelle donnée
        liste.appendChild(nouveauLi);
    }
    
    //Remise à zéro de l'espace d'entrée utilisateur
    document.getElementById("nouveau-hobby").value = "";
}
*/
//fonctions auxiliaires

function validerEntree(valeur) {

    //Vérification : Est-ce qu'il y a une valeur ? Est-ce qu'elle contient autre chose que des espaces blancs ?
    return (valeur && valeur.trim());
}

//Fonctionnalité de lancement dès le chargement de la page effectué

window.onload = start;