"use strict";

function task_test() {
  var num = parseInt(document.getElementById('task_test').value);
  var res = '';
  var i = 0;

  while (i < num) {
    res += '#';
    i++;
  }

  document.getElementById('task_test_result').innerText = res;
}

function task_test2() {
  var num = parseInt(document.getElementById('task_test2').value);
  var res = '';
  var i = num;

  while (i >= 0) {
    res += i + ' ';
    i--;
  }

  document.getElementById('task_test2_result').innerText = res;
} //-----minimum-----


function age() {
  var age = parseInt(document.getElementById('age').value);

  if (age > 0 && age < 12) {
    document.getElementById('age_result').innerText = 'Ви дитина';
  } else if (age >= 12 && age < 18) {
    document.getElementById('age_result').innerText = 'Ви підліток';
  } else if (age >= 18 && age < 60) {
    document.getElementById('age_result').innerText = 'Ви вже дорослий';
  } else if (age >= 60) {
    document.getElementById('age_result').innerText = 'Ви пенсіонер';
  } else {
    document.getElementById('age_result').innerText = 'Помилка';
  }
}

function znak() {
  var znak = document.getElementById('znak').value;

  switch (znak) {
    case '1':
      document.getElementById('znak_result').innerText = '!';
      break;

    case '2':
      document.getElementById('znak_result').innerText = '@';
      break;

    case '3':
      document.getElementById('znak_result').innerText = '#';
      break;

    case '$':
      document.getElementById('znak_result').innerText = '$';
      break;

    case '5':
      document.getElementById('znak_result').innerText = '%';
      break;

    case '6':
      document.getElementById('znak_result').innerText = '^';
      break;

    case '7':
      document.getElementById('znak_result').innerText = '&';
      break;

    case '8':
      document.getElementById('znak_result').innerText = '*';
      break;

    case '9':
      document.getElementById('znak_result').innerText = '(';
      break;

    case '0':
      document.getElementById('znak_result').innerText = ')';
      break;

    default:
      document.getElementById('znak_result').innerText = 'Помилка! Потрібно ввести цифру від 0 до 9';
      break;
  }
}

function suma() {
  var a = parseInt(prompt('Ввдіть початкове число діапазону'));
  var b = parseInt(prompt('Ввдіть кінцеве число діапазону'));
  var i = a;
  var sum = 0;

  while (i <= b) {
    sum += i;
    i++;
  }

  alert("\u0421\u0443\u043C\u0430 \u0432\u0441\u0456\u0445 \u0447\u0438\u0441\u0435\u043B \u0443 \u043F\u0440\u043E\u043C\u0456\u0436\u043A\u0443 \u0432\u0456\u0434 ".concat(a, " \u0434\u043E ").concat(b, " \u0431\u0443\u0434\u0435 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u0442\u0438 ").concat(sum));
}

function dilnik() {
  var a = parseInt(prompt('Ввдіть перше число'));
  var b = parseInt(prompt('Ввдіть друге число'));
  var res;

  for (var i = 1; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
      res = i;
    }
  }

  alert("\u0421\u043F\u0456\u043B\u044C\u043D\u0438\u043C \u0434\u0456\u043B\u044C\u043D\u0438\u043A\u043E\u043C \u0447\u0438\u0441\u0435\u043B ".concat(a, " \u0442\u0430 ").concat(b, " \u0431\u0443\u0434\u0435 \u0447\u0438\u0441\u043B\u043E ").concat(res));
}

function dilniki() {
  var num = parseInt(document.getElementById('dilniki').value);
  var res = '';
  var i = 1;

  while (i <= num) {
    if (num % i == 0) {
      res += i + ', ';
    }

    i++;
  }

  document.getElementById('dilniki_result').innerText = "\u0414\u0456\u043B\u044C\u043D\u0438\u043A\u0430\u043C\u0438 \u0447\u0438\u0441\u043B\u0430 ".concat(num, " \u0454: ").concat(res);
} //-----norma-----


function digits10() {
  var dodatni = 0,
      videmni = 0,
      nuli = 0,
      parni = 0,
      neparni = 0,
      result = '',
      number = 0,
      i = 0;
  var limit = 10;

  while (i < limit) {
    number = parseInt(prompt("Введіть 10 чисел"));

    if (!isNaN(number)) {
      if (number === 0) {
        nuli++;
      } else {
        if (number > 0) {
          dodatni++;
        } else {
          videmni++;
        }
      }

      if (number % 2 === 0) {
        parni++;
      } else {
        neparni++;
      }

      i++;
    }
  }

  result = " \u0417 10 \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(dodatni, "  \u0454 \u0434\u043E\u0434\u0430\u0442\u043D\u0456\u043C\u0438, ").concat(videmni, " \u0454 \u0432\u0456\u0434\u0454'\u043C\u043D\u0438\u043C\u0438, ").concat(parni, " \u0454 \u043F\u0430\u0440\u043D\u0438\u043C\u0438, ").concat(neparni, " \u0454 \u043D\u0435\u043F\u0430\u0440\u043D\u0438\u043C\u0438. \u041D\u0443\u043B\u0456\u0432 \u0431\u0443\u043B\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u043E: ").concat(nuli, " ,");
  document.getElementById('digits10_result').innerText = result;
}

function palindrome() {
  var num = parseInt(document.getElementById('palindrome').value);
  var first = Math.floor(num / 10000);
  var tsecond = Math.floor(num / 1000);
  var second = tsecond % 10;
  var tfourth = Math.floor(num / 10);
  var fourth = tfourth % 10;
  var fifth = num % 10;

  if (first == fifth && second == fourth) {
    document.getElementById('palindrome_result').innerText = "\u0427\u0438\u0441\u043B\u043E ".concat(num, " \u0454 \u043F\u0430\u043B\u0456\u043D\u0434\u043E\u0440\u043E\u043C\u043E\u043C");
  } else {
    document.getElementById('palindrome_result').innerText = "\u0427\u0438\u0441\u043B\u043E ".concat(num, " \u043D\u0435 \u0454 \u043F\u0430\u043B\u0456\u043D\u0434\u043E\u0440\u043E\u043C\u043E\u043C");
  }
}

function discount() {
  var num = parseInt(document.getElementById('discount').value);

  if (num < 200) {
    document.getElementById('discount_result').innerText = "\u0417\u043D\u0438\u0436\u043A\u0430 \u043D\u0435 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0430. \u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438:".concat(num);
  } else if (num >= 200 && num < 300) {
    document.getElementById('discount_result').innerText = "\u0417\u043D\u0438\u0436\u043A\u0430 3%. \u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438: ".concat(num - num * 0.03);
  } else if (num >= 300 && num < 500) {
    document.getElementById('discount_result').innerText = "\u0417\u043D\u0438\u0436\u043A\u0430 5%. \u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438: ".concat(num - num * 0.05);
  } else if (num >= 500) {
    document.getElementById('discount_result').innerText = "\u0417\u043D\u0438\u0436\u043A\u0430 7%. \u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438: ".concat(num - num * 0.07);
  }
}

function day() {
  var i = 1;
  var text = '';

  do {
    if (i > 7) {
      i = 1;
    }

    if (i === 1) {
      text = 'Monday';
    } else if (i === 2) {
      text = 'Tuesday';
    } else if (i === 3) {
      text = 'Wednesday';
    } else if (i === 4) {
      text = 'Thursday';
    } else if (i === 5) {
      text = 'Friday';
    } else if (i === 6) {
      text = 'Saturday';
    } else if (i === 7) {
      text = 'Sunday';
    }

    i++;
  } while (confirm('Today is: ' + text + '. Show next day?'));
} //------------------multiply


var r = 0;

for (var i = 2; i <= 9; i++) {
  for (var j = 1; j <= 10; j++) {
    r = i * j;
    console.log(i + ' * ' + j + ' = ' + r);
  }
}