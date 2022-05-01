"use strict";

function hello() {
  var name = prompt('Enter your name:');
  alert("Hello, ".concat(name, "!"));
}

function age() {
  var yearofbirth = parseInt(prompt('What is your year of birth?'));
  var currentyear = 2022;
  var age = currentyear - yearofbirth;
  alert("Your are ".concat(age, " years old!"));
}

function perimetr() {
  var side = prompt('Specify the length of the side of the square');
  var perimetr = side * 4;
  alert("Perimetr of the square is ".concat(perimetr));
}

function circlearea() {
  var radius = prompt('Specify radius of the circle');
  var circlearea = Math.PI * Math.pow(radius, 2);
  alert("Circle area is ".concat(circlearea));
}

function speed() {
  var distance = prompt('Specify distance between two cities (in km)');
  var time = prompt('Specify time (in hours) you want to cover this distance');
  var speed = distance / time;
  alert("Your speed should be ".concat(speed, " km per hour"));
}

function convert() {
  var usd = prompt('Specify amount in Dollars you would like to convert');
  var usd2eur = 0.95;
  var eur = usd * usd2eur;
  alert("You will get ".concat(eur, " EUR for ").concat(usd, " USD"));
}

function fivedigits() {
  var number = prompt('Specify a five-digit number');
  var lastdigit = number % 10;
  var fourdigit = parseInt(number / 10);
  var res = lastdigit * 10000 + fourdigit;
  alert(res);
}

function salary() {
  var sales = prompt('Please tell the amount of sales you did this month (in USD)');
  var commission = sales * 0.1;
  var salary = 250 + commission;
  alert("Your salary this month is ".concat(salary, " USD"));
}