"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var count = 0;
    var update = false;
    var string;

    document.getElementById("inputStr").focus();

    var buttonAddElement = document.querySelector(".add-element");
    buttonAddElement.addEventListener("click", function () {
        var newLi = document.createElement("li");
        newLi.id = String(count);

        var newTable = document.createElement("table");
        var newTbody = document.createElement("tbody");
        var newTr = document.createElement("tr");
        newTr.classList.add(String(count));
        var newTd1 = document.createElement("td");
        newTd1.style.width = "220px";
        newTd1.innerHTML = document.getElementById("inputStr").value;
        var newTd2 = document.createElement("td");
        newTd2.style.width = "85px";
        var newTd3 = document.createElement("td");

        var buttonDelete = createButtonDelete(String(count));
        newTd2.appendChild(buttonDelete);

        var buttonEdit = createButtonEdit(String(count));
        newTd3.appendChild(buttonEdit);

        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        newTr.appendChild(newTd3);
        newTbody.appendChild(newTr);
        newTable.appendChild(newTbody);
        newLi.appendChild(newTable);
        list.appendChild(newLi);
        count++;
        document.getElementById("inputStr").focus();
    });


    function createButtonDelete(classButton) {
        var buttonDelete = document.createElement("button");
        buttonDelete.classList.add(classButton);
        buttonDelete.classList.add("delete");
        buttonDelete.type = "button";
        buttonDelete.innerText = "удалить";
        buttonDelete.style.width = "74px";
        return buttonDelete;
    }

    function createButtonEdit(classButton) {
        var buttonEdit = document.createElement("button");
        buttonEdit.classList.add(classButton);
        buttonEdit.classList.add("edit");
        buttonEdit.type = "button";
        buttonEdit.style.width = "105px";
        buttonEdit.innerText = "редактировать";
        return buttonEdit;
    }


    var button = document.getElementById("list");
    button.addEventListener("click", function (e) {
        var target = e.target;
        if (target.classList[1] === "delete") {
            deleteLi(target.classList[0]);
        }
        if (target.classList[1] === "edit") {
            editLi(target.classList[0]);
        }
    });

    function deleteLi(e) {
        list.removeChild(document.getElementById(e));
    }

    function editLi(e) {
        if (update) {
            return;
        }
        update = true;
        var buttonDelete = document.getElementsByClassName(e)[1];
        buttonDelete.remove();
        var buttonEdit = document.getElementsByClassName(e)[1];
        buttonEdit.remove();

        var buttonCancel = document.createElement("button");
        buttonCancel.classList.add("delete");
        buttonCancel.type = "button";
        buttonCancel.innerText = "отменить";
        buttonCancel.style.width = "74px";
        document.getElementsByClassName(e)[0].children[1].appendChild(buttonCancel);

        var buttonSave = document.createElement("button");
        buttonSave.classList.add("save");
        buttonSave.type = "button";
        buttonSave.style.width = "105px";
        buttonSave.innerText = "сохранить";
        document.getElementsByClassName(e)[0].children[2].appendChild(buttonSave);

        var cell = document.getElementById(e).querySelector("td");
        string = cell.innerText;
        var input = document.createElement("input");
        input.type = "text";
        input.id = "active";
        input.value = cell.innerText;
        string = cell.innerText;
        cell.innerText = "";
        cell.appendChild(input);
        document.getElementById("active").focus();

        buttonCancel.addEventListener("click", function (e) {
            cell.innerText = string;
            var idClass = e.target.parentElement.parentElement.classList[0];
            var buttonDelete = document.getElementsByClassName(idClass)[0].children[1].children[0];
            buttonDelete.remove();
            var buttonEdit = document.getElementsByClassName(idClass)[0].children[2].children[0];
            buttonEdit.remove();

            document.getElementsByClassName(idClass)[0].children[1].appendChild(createButtonDelete(idClass));
            document.getElementsByClassName(idClass)[0].children[2].appendChild(createButtonEdit(idClass));
            update = false;
        });

        buttonSave.addEventListener("click", function (e) {
            var newString;
            newString = document.getElementById("active").value;
            cell.innerText = newString;

            var idClass = e.target.parentElement.parentElement.classList[0];
            var buttonFirst = document.getElementsByClassName(idClass)[0].children[1].children[0];
            buttonFirst.remove();
            var buttonSecond = document.getElementsByClassName(idClass)[0].children[2].children[0];
            buttonSecond.remove();

            document.getElementsByClassName(idClass)[0].children[1].appendChild(createButtonDelete(idClass));
            document.getElementsByClassName(idClass)[0].children[2].appendChild(createButtonEdit(idClass));
            update = false;
        });
    }
});