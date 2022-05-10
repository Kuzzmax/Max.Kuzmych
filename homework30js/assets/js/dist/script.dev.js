"use strict";

//-----minimum-----
function quantity() {}

function compare() {
  var a = parseInt(document.getElementById('compare').value);
  var b = parseInt(document.getElementById('compare2').value);

  if (a < b) {
    document.getElementById('compare_result').innerText = '-1';
  } else if (a > b) {
    document.getElementById('compare_result').innerText = '1';
  } else if (a == b) {
    document.getElementById('compare_result').innerText = '0';
  } else {
    document.getElementById('compare_result').innerText = 'Помилка! Введіть два числа';
  }
}

function factorial() {
  var i = parseInt(document.getElementById('factorial').value);
  var res = 1;

  while (i > 0) {
    res *= i;
    i--;
  }

  document.getElementById('factorial_result').innerText = "\u0424\u0430\u043A\u0442\u043E\u0440\u0456\u0430\u043B \u0447\u0438\u0441\u043B\u0430 ".concat(document.getElementById('factorial').value, " = ").concat(res);
}

function digits() {
  var a = parseInt(document.getElementById('digits').value);
  var b = parseInt(document.getElementById('digits2').value);
  var c = parseInt(document.getElementById('digits3').value);
  var res;
  res = a * 100 + b * 10 + c;
  document.getElementById('digits_result').innerText = "".concat(res);
}

function area() {
  var a = document.getElementById('area').value;
  var b = document.getElementById('area2').value;
  var res;

  if (a === "" && b > 0) {
    res = Math.pow(b, 2);
  } else if (b === "" && a > 0) {
    res = Math.pow(a, 2);
  } else if (a > 0 && b > 0) {
    res = a * b;
  } else {
    document.getElementById('area_result').innerText = "Помилка! Введіть сторони прямокутника ";
  }

  document.getElementById('area_result').innerText = "\u041F\u043B\u043E\u0449\u0430 \u0444\u0456\u0433\u0443\u0440\u0438 = ".concat(res);
} //-----norma-----


function perfect() {
  var a = parseInt(document.getElementById('perfect').value);
  var res = 'Не досконале число';
  var x = 0;
  var i;

  for (i = a - 1; i > 0; i--) {
    if (a % i == 0) {
      x += i;
    }
  }

  if (x == a) {
    res = 'Досконале число';
  }

  document.getElementById('perfect_result').innerText = res;
}

function isPerfect(a) {
  var res = false,
      x = 0;
  var i;
  a = parseInt(a);

  for (i = a - 1; i > 0; i--) {
    if (a % i == 0) {
      x += i;
    }
  }

  if (x == a) {
    res = true;
  }

  return res;
}

function dperfect() {
  var a = parseInt(document.getElementById('dperfect').value);
  var b = parseInt(document.getElementById('dperfect2').value);
  var res = '';
  var n;

  if (a > b) {
    alert('Числа введено невірно');
  }

  for (n = a; n <= b; n++) {
    if (n > 0 && isPerfect(n)) {
      res += n + ' ';
    }
  }

  document.getElementById('dperfect_result').innerText = res;
}