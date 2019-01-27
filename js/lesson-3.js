/*С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/

let i = 2;

while (i < 100) {
    if (isPrime(i)) console.log(i);
    i++;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

/*С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
*/
var arr = [];

arr.push('zero');
arr.push('one', 2);
arr.push('z');
arr.push('rrt2', 2, "rtt");

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr.length);
}

/*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:*/

for (i = 1; i < 10; console.log(i++)) {
}

/*Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:*/

let x = "";

for (let i = 1; i <= 20; i++) {
    x += "X";
    console.log(x);
}

