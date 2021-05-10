const start = function() {
    let autoButton = document.getElementById("autocomplete");
    let resetButton = document.getElementById("reset-button");
    
    autoButton.addEventListener("click", activateAutoComplete);
    resetButton.addEventListener("click", resetForm);
    
}

const activateAutoComplete = function() {
    let form = document.forms["formulaire"];
    form.setAttribute("autocomplete", "on");
}

const resetForm = function() {
    let form = document.forms["formulaire"];
    form.reset();
}

window.onload = start;