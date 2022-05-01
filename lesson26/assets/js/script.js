function sq_area() { 
    const num = parseInt(prompt('Enter lenght of the side of the square'));
    const rez = num**2;
    alert(rez);
}

function convert() { 
    const km = parseInt(prompt('Enter lenght in km'));
    const ml = km*0.621371;
    alert(`Lenght in ml will be ${ml}`);
}

function calc() { 
    const a = parseInt(prompt('Enter first number'));
    const b = parseInt(prompt('Enter second number'));
    const act = prompt('Enter action');
    let rez;
    if (act == '+') {
        rez = a + b;
    } else if (act == '-') {
        rez = a - b
    } else if (act == '*') {
        rez = a * b;
    } else if (act == '/') {
        rez = a / b;
    } else { 
        alert ('choose + - * /')
    }

    if ( rez != undefined) { 
        alert(`result ${rez}`);
    }

}

function findX() { 
    const a = parseInt(prompt('Enter a'));
    const b = parseInt(prompt('Enter b'));
    const x = b * (-1) / a;
    alert(`X is ${x}`);
}

function time2end(){ 
    const hour = +prompt('Enter hour');
    const min = +prompt('Enter min');
    const totalminleft = ((24 * 60) - (hour * 60 + min));
    const hourleft = parseInt(totalminleft / 60)
    const minleft = totalminleft - hourleft * 60;
    alert(`${hourleft}:${ minleft}`);
}

function digit2() { 
    const abc = +prompt('Введіть трьохзначне число');
    const rez = parseInt((abc % 100) / 10);
    alert(`Друга цифра: ${rez}`);
    
}