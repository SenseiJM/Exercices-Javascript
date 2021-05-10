let cadre = document.createElement("table");
cadre.style.backgroundColor = "rgb(0,0,255)";
// cadre.style.width = "150px";
// cadre.style.height = "150px";
document.getElementsByTagName("body")[0].appendChild(cadre);
//console.log(cadre.style.backgroundColor);

let row1 = document.createElement("tr");
//row1.style.height = "50px";
document.getElementsByTagName("table")[0].appendChild(row1);

let row2 = document.createElement("tr");
document.getElementsByTagName("table")[0].appendChild(row2);


let data1 = document.createElement("td");
data1.style.backgroundColor = "rgb(255,255,255)";
data1.style.height = "20px";
data1.style.width = "20px";
data1.style.borderRadius = "75px";
document.getElementsByTagName("tr")[0].appendChild(data1);

let data2 = document.createElement("td");
data2.style.backgroundColor = "rgb(255,255,255)";
data2.style.height = "20px";
data2.style.width = "20px";
data2. style.borderRadius = "75px";
document.getElementsByTagName("tr")[0].appendChild(data2);