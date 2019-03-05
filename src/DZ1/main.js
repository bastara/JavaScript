console.log("Массив чисел");
//Создайте массив чисел
var list = [2, 5, 6, 9, 656, 2, -65, 234];
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
console.log(list.slice(list.length - 5));

//•Найдите сумму элементов массива, которые являются четными числами
var sum = list.reduce(function (previousValue, currentValue) {
    return previousValue + getEven(currentValue);//тут можно функцию использовать?
    // return previousValue + (currentValue % 2 == 0 ? currentValue : 0);
});

function getEven(num) {
    if (num % 2 == 0) {
        return num;
    }
    return 0;
}


console.log("Найдите сумму элементов массива, которые являются четными числами: " + sum);
console.log();

// •Создайте массив чисел от 1 до 100, в таком порядке
console.log("Создайте массив чисел от 1 до 100, в таком порядке");
var list100 = [];
getArrayPow2(list100, 100);
console.log(list100);
//•Получите список квадратов четных чисел из этого массива
console.log("Получите список квадратов четных чисел из этого массива");
var arrayNumbersPow2 = pow2(list100);
console.log(arrayNumbersPow2);
console.log();
console.log();

function getArrayPow2(arr, n) {//если я правильно понял то в этом месте нельзя использовать ни один встроенный метод?
    for (var i = 1; i <= n; i++) {
        arr.push(i);
    }
}

function pow2(arr) {//аналогично 48 строчке, встроенные методы тут не применимы ... Или еще подумать?
    var array = [];//я понимаю что массив pow2 тут так же видно но решил сделать отдельный массив, заполнить его и потом его присвоить основному массиву.
    var count = 0;
    for (var i = 0; i < 100; i++) {
        if (getEven(arr[i])) {
            array[count] = arr[i] * arr[i];
            count++;
            // console.log(array[i]);//в яве не желательно использовать функции для вывода на консоль, а тут как?
        }
    }
    return array;
}
