"use strict";

function sq_area() {
  var num = parseInt(prompt('Enter lenght of the side of the square'));
  var rez = Math.pow(num, 2);
  alert(rez);
}

function convert() {
  var km = parseInt(prompt('Enter lenght in km'));
  var ml = km * 0.621371;
  alert("Lenght in ml will be ".concat(ml));
}

function calc() {
  var a = parseInt(prompt('Enter first number'));
  var b = parseInt(prompt('Enter second number'));
  var act = prompt('Enter action');
  var rez;

  if (act == '+') {
    rez = a + b;
  } else if (act == '-') {
    rez = a - b;
  } else if (act == '*') {
    rez = a * b;
  } else if (act == '/') {
    rez = a / b;
  } else {
    alert('choose + - * /');
  }

  if (rez != undefined) {
    alert("result ".concat(rez));
  }
}

function findX() {
  var a = parseInt(prompt('Enter a'));
  var b = parseInt(prompt('Enter b'));
  var x = b * -1 / a;
  alert("X is ".concat(x));
}

function time2end() {
  var hour = +prompt('Enter hour');
  var min = +prompt('Enter min');
  var totalminleft = 24 * 60 - (hour * 60 + min);
  var hourleft = parseInt(totalminleft / 60);
  var minleft = totalminleft - hourleft * 60;
  alert("".concat(hourleft, ":").concat(minleft));
}

function digit2() {
  var abc = +prompt('Введіть трьохзначне число');
  var rez = parseInt(abc % 100 / 10);
  alert("\u0414\u0440\u0443\u0433\u0430 \u0446\u0438\u0444\u0440\u0430: ".concat(rez));
}