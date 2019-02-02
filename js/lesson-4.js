/*Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в
котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект:
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

var number = +prompt("Введите число от 0 до 999");

function toObject(number) {
    number += '';
    var keys = ['units', 'dozen', 'hundreds', 'thousands'];

    if (number.length > keys.length) {
        throw new Error('Такие числа не поддерживаются');
    }

    var obj = {};
    for (var i = number.length; i > 0; i--) {
        var key = keys[number.length - i];

        obj[key] = number[i - 1];
    }

    return obj;

}

console.log(toObject(number));

