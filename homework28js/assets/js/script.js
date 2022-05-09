
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
    let a = 0.1;
    let b = 0.2;
    const c = a + b;
    alert(`0.1 + 0.2 = ${c.toFixed(1)}`);
}

function stringnum() {
    let a = "1";
    let b = 2;
    let a2num = Number(a);
    const res = b + a2num;
    alert(`"1" + 2 = ${res}`);
}

function flashka() { 
    let gb = prompt('Вкажіть розмір флешки у Гб');
    const gb2mb = 1024;
    let mb = gb * gb2mb;
    let res = Math.floor(mb / 820);
    alert(`На флешку поміститься ${res} файлів розміром 820 Мб`);
}

function chocolate() { 
    let money = prompt('Скільки у вас грошей');
    let chocolatePrice = prompt('Яка ціна шоколадки');
    let chocolateQty = Math.floor(money / chocolatePrice);
    let left = money - (chocolatePrice * chocolateQty);
    alert(`Ви зможете купити ${chocolateQty} шоколадок і у вас ще залищиться ${left.toFixed(2)}`)
}

function digit3() { 
    let inp = prompt('Введіть тризначне число')
    let last = inp % 10;
    let second = inp % 100;
    let second2 = Math.floor(second / 10);
    let first = Math.floor(inp / 100);
    let res = last * 100 + second2 * 10 + first;
    alert(res);
}

function deposit() { 
    let money = prompt('Введіть суму вкладу');
    let moneyNew = money * (1 + (5 / 100 * (2 / 12)));
    let profit = moneyNew - money;
    alert(`Сума нарахованих відсотків буде становити ${profit}`);
}

function orAnd() { 
    alert(`"2 && 0 && 3" поверне: ${(2 && 0 && 3)}`);
    alert(`"2 || 0 || 3" поверне: ${(2 || 0 || 3)}`);
    alert(`"2 && 0 || 3" поверне: ${(2 && 0 || 3)}`);
}

// ____________________________________

function numCheck() { 
    let num = parseInt(prompt('Введіть число'));
    let res;
    if (num > 0) {
        res = '+';
    } else if (num < 0) {
        res = '-';
    } else if (num == 0) { 
        res = 'o'
    }
    alert(res);
}

function age() { 
    let num = parseInt(prompt('Cкільки вам років'));
    if (num > 0 && num < 120) {
        alert(`Вам ${num} років`)
    } else { 
        alert("Брехун")
    }
}

function modul() { 
    let num = parseInt(prompt('Введіть число'));
    alert(`Модуль цього числа ${Math.abs(num)}`);
}

// function time() {
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