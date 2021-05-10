const start = function() {
    
    let button = document.getElementById("add-element");
    button.addEventListener("click", ajouterElement);
}

function ajouterElement() {
    nbElements++;
    let elementList = document.getElementById("list-elements");
    
    let newElement = document.createElement("li");
    newElement.innerText = "Nouvel élément " + nbElements;
    
    elementList.appendChild(newElement);
}

let nbElements = 0;
window.onload = start;