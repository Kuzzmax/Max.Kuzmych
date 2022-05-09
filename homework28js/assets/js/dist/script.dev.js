"use strict";

// function fivedigits() { 
//     let number = prompt('Specify a five-digit number');
//     let lastdigit = number % 10;
//     let fourdigit = parseInt(number / 10);
//     let res = lastdigit * 10000 + fourdigit;
//     alert(res);
// }
// function salary() { 
//     let sales = prompt('Please tell the amount of sales you did this month (in USD)')
//     const commission = sales * 0.1;
//     let salary = 250 + commission;  
//     alert (`Your salary this month is ${salary} USD`)
// }
function get03() {
  var a = 0.1;
  var b = 0.2;
  var c = a + b;
  alert("0.1 + 0.2 = ".concat(c.toFixed(1)));
}

function stringnum() {
  var a = "1";
  var b = 2;
  var a2num = Number(a);
  var res = b + a2num;
  alert("\"1\" + 2 = ".concat(res));
}

function flashka() {
  var gb = prompt('Вкажіть розмір флешки у Гб');
  var gb2mb = 1024;
  var mb = gb * gb2mb;
  var res = Math.floor(mb / 820);
  alert("\u041D\u0430 \u0444\u043B\u0435\u0448\u043A\u0443 \u043F\u043E\u043C\u0456\u0441\u0442\u0438\u0442\u044C\u0441\u044F ".concat(res, " \u0444\u0430\u0439\u043B\u0456\u0432 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C 820 \u041C\u0431"));
}

function chocolate() {
  var money = prompt('Скільки у вас грошей');
  var chocolatePrice = prompt('Яка ціна шоколадки');
  var chocolateQty = Math.floor(money / chocolatePrice);
  var left = money - chocolatePrice * chocolateQty;
  alert("\u0412\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u0438 ".concat(chocolateQty, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A \u0456 \u0443 \u0432\u0430\u0441 \u0449\u0435 \u0437\u0430\u043B\u0438\u0449\u0438\u0442\u044C\u0441\u044F ").concat(left.toFixed(2)));
}

function digit3() {
  var inp = prompt('Введіть тризначне число');
  var last = inp % 10;
  var second = inp % 100;
  var second2 = Math.floor(second / 10);
  var first = Math.floor(inp / 100);
  var res = last * 100 + second2 * 10 + first;
  alert(res);
}

function deposit() {
  var money = prompt('Введіть суму вкладу');
  var moneyNew = money * (1 + 5 / 100 * (2 / 12));
  var profit = moneyNew - money;
  alert("\u0421\u0443\u043C\u0430 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 \u0431\u0443\u0434\u0435 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 ".concat(profit));
}

function orAnd() {
  alert("\"2 && 0 && 3\" \u043F\u043E\u0432\u0435\u0440\u043D\u0435: ".concat(2 && 0 && 3));
  alert("\"2 || 0 || 3\" \u043F\u043E\u0432\u0435\u0440\u043D\u0435: ".concat(2 || 0 || 3));
  alert("\"2 && 0 || 3\" \u043F\u043E\u0432\u0435\u0440\u043D\u0435: ".concat(2 && 0 || 3));
} // ____________________________________


function numCheck() {
  var num = parseInt(prompt('Введіть число'));
  var res;

  if (num > 0) {
    res = '+';
  } else if (num < 0) {
    res = '-';
  } else if (num == 0) {
    res = 'o';
  }

  alert(res);
}

function age() {
  var num = parseInt(prompt('Cкільки вам років'));

  if (num > 0 && num < 120) {
    alert("\u0412\u0430\u043C ".concat(num, " \u0440\u043E\u043A\u0456\u0432"));
  } else {
    alert("Брехун");
  }
}

function modul() {
  var num = parseInt(prompt('Введіть число'));
  alert("\u041C\u043E\u0434\u0443\u043B\u044C \u0446\u044C\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 ".concat(Math.abs(num)));
} // function time() {
//     let hour = prompt('Введіть годину');
//     let min = prompt('Введіть хвилину');
//     let sec = prompt('Введіть секунду');
//     if (hour % 1 == 0 && hour >= 0 && hour<=24) {
//         // let validhour = hour;
//     } else {
//         alert('Введіть годину в 24 форматі');
//     }
//     if (min % 1 == 0 && min >= 0 && min <= 60) {
//         // let validmin = min;
//     } else { 
//         alert('Введіть хвилину в 60 форматі');
//     }
//     if (sec % 1 == 0 && sec >= 0 && sec <= 60) {
//         // let validsec = sec;
//     } else { 
//         alert('Введіть секунду в 60 форматі');
//     }
//     alert (`Зараз ${hour}:${min}:${dsec}`)
// }