"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var buttonTransfer;
    buttonTransfer = document.querySelector(".create-button");

    buttonTransfer.addEventListener("click", function () {
        var celsius = document.getElementById("celsius").value;
        var output = document.getElementById("temp-fahrenheit");
        output.innerHTML = "Температура в градусах фаренгейта равна =" + (celsius * 9 / 5 + 32);
        //сделал без объявления новой переменной т.к. в дальнейшем ее не собираюсь использовать
        document.getElementById("temp-kelvin").innerHTML = "Температура в градусах кельвина равна =" + (celsius * 1 + 273.15);
    });
});