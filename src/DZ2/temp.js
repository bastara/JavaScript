"use strict";

// Не смог вставить код в "DOMContentLoaded"
// document.addEventListener("DOMContentLoaded", function () {
//
//
// });

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
    newLi.innerHTML = document.getElementById("inputStr").value;
    var newLiDel = document.createElement("img");
    newLiDel.src = "../ic_delete_forever_black_18dp.png";
    list.appendChild(newLi).appendChild(newLiDel);
}
