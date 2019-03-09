"use strict";

// Не смог вставить код в "DOMContentLoaded"
// document.addEventListener("DOMContentLoaded", function () {
//
//
// });
var count = 0;
var update = false;
var string;


function getFahrenheitFromCelsius() {
    var celsius = document.getElementById("celsius").value;
    var output = document.getElementById("convert");
    output.innerHTML = "Температура в градусах фаренгейта равна =" + (celsius * 9 / 5 + 32);
}

var newv = document.getElementById("arrowCelsius");
var output2 = document.getElementById("arrowConvert");
output2.innerHTML = "Температура в градусах фаренгейта равна = " + (newv.value * 9 / 5 + 32);
newv.onchange = function () {
    output2.innerHTML = "Температура в градусах фаренгейта равна = " + (newv.value * 9 / 5 + 32);
};

function addListElement() {
    var newLi = document.createElement("li");
    newLi.id = count;
    var newTable = document.createElement("table");
    var newTbody = document.createElement("tbody");
    var newTr = document.createElement("tr");
    var newTd1 = document.createElement("td");
    newTd1.style.width = "220px";
    newTd1.innerHTML = document.getElementById("inputStr").value;
    var newTd2 = document.createElement("td");
    newTd2.style.width = "60px";
    var newA = document.createElement("a");
    newA.href = "javascript: onclick = deleteLi(" + count + ")";
    var newImgDel = document.createElement("img");
    newImgDel.style.hspace = 8;
    newImgDel.style.vspace = 0;
    newImgDel.src = "../ic_delete_forever_black_18dp.png";
    newA.appendChild(newImgDel);
    var newAUpd = document.createElement("a");
    newAUpd.href = "javascript: onclick = updateLi(" + count + ")";
    var newImgUpd = document.createElement("img");
    newImgUpd.src = "../ic_assignment_black_18dp.png";
    newAUpd.appendChild(newImgUpd);
    newTd2.appendChild(newA);
    newTd2.appendChild(newAUpd);
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    newTbody.appendChild(newTr);
    newTable.appendChild(newTbody);
    newLi.appendChild(newTable);
    list.appendChild(newLi);
    count++;
}

function deleteLi(e) {
    list.removeChild(document.getElementById(e));
}

function updateLi(e) {
    if (update) {
        return;
    }
    update = true;
    var cell = document.getElementById(e).querySelector("td");
    var input = document.createElement("input");
    cell.id = "scriptBox";
    input.type = "text";
    input.setAttribute("onkeydown", "return runScript(event)");
    // cell.innerText = "";
    input.value = cell.innerText;
    string = cell.innerText;
    cell.innerText = "";
    cell.appendChild(input);
}

function runScript(e) {

    if (e.keyCode == 13) {
        var cell = document.getElementById("scriptBox");
        cell.innerText = cell.childNodes[0].value;
        update = false;
        cell.id = "";
    }
    if (e.keyCode == 27) {
        cell = document.getElementById("scriptBox");
        cell.innerText = string;
        update = false;
        cell.id = "";
    }
}
