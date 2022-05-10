//-----minimum-----

function quantity() { 

}

function compare() { 
    let a = parseInt(document.getElementById('compare').value);
    let b = parseInt(document.getElementById('compare2').value);
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
    let i = parseInt(document.getElementById('factorial').value);
    let res = 1;
    while (i > 0) { 
        res *= i;
        i--;
    }
    document.getElementById('factorial_result').innerText = `Факторіал числа ${document.getElementById('factorial').value} = ${res}`;
}

function digits() { 
    let a = parseInt(document.getElementById('digits').value);
    let b = parseInt(document.getElementById('digits2').value);
    let c = parseInt(document.getElementById('digits3').value);
    let res;
    res = a * 100 + b * 10 + c;
    document.getElementById('digits_result').innerText = `${res}`;
}

function area() { 
    let a = document.getElementById('area').value;
    let b = document.getElementById('area2').value;
    let res;
    if (a === "" && b > 0) {
        res = b ** 2;
    } else if (b === "" && a > 0) {
        res = a ** 2;
    } else if (a > 0 && b > 0) {
        res = a * b;
    } else {
        document.getElementById('area_result').innerText = "Помилка! Введіть сторони прямокутника ";
    }
    document.getElementById('area_result').innerText = `Площа фігури = ${res}`;
}

//-----norma-----

function perfect() {
    let a = parseInt(document.getElementById('perfect').value);
    let res = 'Не досконале число';
    let x = 0;
    let i;
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
    let res = false,
    x = 0;
    let i;
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
    let a = parseInt(document.getElementById('dperfect').value);
    let b = parseInt(document.getElementById('dperfect2').value);
    let res = '';
    let n;
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