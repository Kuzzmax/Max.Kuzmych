function hello() { 
    let name = prompt('Enter your name:');
    alert(`Hello, ${name}!`);
}

function age() { 
    let yearofbirth = parseInt(prompt('What is your year of birth?'));
    const currentyear = 2022;
    let age = currentyear - yearofbirth;
    alert (`Your are ${age} years old!`);
}

function perimetr() { 
    let side = prompt('Specify the length of the side of the square');
    let perimetr = side * 4;
    alert (`Perimetr of the square is ${perimetr}`);
}

function circlearea() { 
    let radius = prompt('Specify radius of the circle');
    let circlearea = Math.PI * (radius ** 2);
    alert (`Circle area is ${circlearea}`);
}

function speed() { 
    let distance = prompt('Specify distance between two cities (in km)');
    let time = prompt('Specify time (in hours) you want to cover this distance');
    let speed = distance / time;    
    alert (`Your speed should be ${speed} km per hour`);
}

function convert() { 
    let usd = prompt('Specify amount in Dollars you would like to convert'); 
    const usd2eur = 0.95;
    let eur = usd * usd2eur;
    alert (`You will get ${eur} EUR for ${usd} USD`);
}

function fivedigits() { 
    let number = prompt('Specify a five-digit number');
    let lastdigit = number % 10;
    let fourdigit = parseInt(number / 10);
    let res = lastdigit * 10000 + fourdigit;
    alert(res);
}

function salary() { 
    let sales = prompt('Please tell the amount of sales you did this month (in USD)')
    const commission = sales * 0.1;
    let salary = 250 + commission;  
    alert (`Your salary this month is ${salary} USD`)
}