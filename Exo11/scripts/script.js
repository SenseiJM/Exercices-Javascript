const start = function() {
    
    let button = document.getElementById("add-element");
    button.addEventListener("click", add);
}

const add = function addElement() {

    let input = document.getElementById("user-input").value;

    if (input != "") {

        nbElements++;
        let elementList = document.getElementById("list-elements");
        
        let newElement = document.createElement("li");
        newElement.innerText = `${input}`;
        
        elementList.appendChild(newElement);

        document.getElementById("user-input").value = "";

    }

}

let nbElements = 0;
window.onload = start;