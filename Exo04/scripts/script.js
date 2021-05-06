let today = new Date();
let message = "Bonjour, nous sommes ";

switch (today.getDay()) {
    case 0:
        message += "dimanche !";
        break;
    case 1:
        message += "lundi !";
        break;
    case 2:
        message += "mardi !";
        break;
    case 3:
        message += "mercredi !";
        break;
    case 4:
        message += "jeudi !";
        break;
    case 5:
        message += "vendredi !";
        break;
    case 6:
        message += "samedi !";
        break;
}

alert(message);