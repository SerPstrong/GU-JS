var a = 1, b = 1, c, d;
c = ++a;
alert(c);      // 2 (идет увеличение на 1, потом присваивание)
d = b++;
alert(d);      // 1 (идет присваивание, потом увеличение)
c = (2 + ++a);
alert(c);      // 5 (увеличение а на 1 = 3, + 2)
d = (2 + b++);
alert(d);      // 4 (до присваивания b=2, + 2)
alert(a);      // 3 (было 2 раза увеличение на 1)
alert(b);      // 3 (было 2 раза увеличение на 1)

/*------------------2*/

var a = 2;
var x = 1 + (a *= 2); //x = 5

alert(x);

/*------------------3*/

var a = -5;
var b = 3;

if (a === b) {
    alert(a - b);
} else if (a < 0 || b < 0) {
    alert(a * b);
} else if (a !== b) {
    alert(a + b);
}

/*-------------------4*/

var a = +prompt("Введите число от 0 до 15");

switch (a) {
    case 1:
        document.write("1 <br>");
    case 2:
        document.write("2 <br>");
    case 3:
        document.write("3 <br>");
    case 4:
        document.write("4 <br>");
    case 5:
        document.write("5 <br>");
    case 6:
        document.write("6 <br>");
    case 7:
        document.write("7 <br>");
    case 8:
        document.write("8 <br>");
    case 9:
        document.write("9 <br>");
    case 10:
        document.write("10 <br>");
    case 11:
        document.write("11 <br>");
    case 12:
        document.write("12 <br>");
    case 13:
        document.write("13 <br>");
    case 14:
        document.write("14 <br>");
    case 15:
        document.write("15 <br>");
        break;
}


/*---------------5*/

alert(sum(9, 5));
alert(dif(9, 5));
alert(com(9, 5));
alert(pr(9, 5));

function sum(a, b) {
    return a + b;
}

function dif(a, b) {
    return a - b;
}

function com(a, b) {
    return a * b;
}

function pr(a, b) {
    return a / b;
}

/*-----------6*/

alert(mathOperation(5, 6, "pr"));

function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case "sum":
            return (arg1 + arg2);
            break;
        case "dif":
            return (arg1 - arg2);
            break;
        case "com":
            return (arg1 * arg2);
            break;
        case "pr":
            return (arg1 / arg2);
            break;
    }
}

/*---------7*/

var a = null;
var b = 0;

document.write((a == b) + ("<br/>")); //false
document.write((a > b) + ("<br/>")); //false
document.write((a < b) + ("<br/>")); //false
document.write((a >= b) + ("<br/>")); // true

/*8*/

document.write(power(2, 8))

function power(val, pow) {
    return Math.pow(val, pow)
}
