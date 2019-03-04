console.log("Массив чисел");
//Создайте массив чисел
var list = [2, 5, 6, 9, 654, 2, -65, 234];
console.log(list);

//•Отсортируйте его по убыванию
list.sort(function (e1, e2) {
    return e2 - e1;
});
console.log("Сортировка по убыванию");
console.log(list);

//•Получите подмассив из первых 5 элементов и подмассив из последних 5 элементов
console.log("Первые 5 значений");
console.log(list.slice(0, 5));
console.log("Последние 5 значений");
console.log(list.slice(list.length - 5, list.length));

//•Найдите сумму элементов массива, которые являются четными числами
var sum = 0;
list.forEach(function (item) {
    sum += even(item) ? item : 0;
});

function even(num) {
    return !!(num + 1 & 1);
}

console.log("Найдите сумму элементов массива, которые являются четными числами: " + sum);
console.log();

// •Создайте массив чисел от 1 до 100, в таком порядке
console.log("Создайте массив чисел от 1 до 100, в таком порядке");
var list100 = [];
fillingOfArray(list100, 100);
console.log(list100);
//•Получите список квадратов четных чисел из этого массива
console.log("Получите список квадратов четных чисел из этого массива");
var arrayNumbersPow2 = pow2(list100);
console.log(arrayNumbersPow2);


function fillingOfArray(arr, n) {
    for (var i = 0; i < n; i++) {
        // arr.push(i + 1);
        arr[i] = i + 1;
    }
}

function pow2(arr) {
    var array = [];//я понимаю что массив pow2 тут так же видно но решил сделать отдельный массив, заполнить его и потом его присвоить основному массиву.
    var count = 0;
    for (var i = 0; i < 100; i++) {
        if (even(arr[i])) {
            array[count] = arr[i] * arr[i];
            count++;
            // console.log(array[i]);//в яве не желательно использовать функции для вывода на консоль, а тут как?
        }
    }
    return array;
}
