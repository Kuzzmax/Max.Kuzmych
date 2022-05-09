function task_test() { 
    const num = parseInt(document.getElementById('task_test').value);
    let res = '';
    let i = 0;
    while (i < num) { 
        res += '#';
        i++;
    }
    document.getElementById('task_test_result').innerText = res;
}

function task_test2() { 
    const num = parseInt(document.getElementById('task_test2').value);
    let res = '';
    let i = num;
    while (i >=0) { 
        res += i+' ';
        i--;
    }
    document.getElementById('task_test2_result').innerText = res;
}
//-----minimum-----

function age() { 
    let age = parseInt(document.getElementById('age').value);
    if (age > 0 && age < 12) {
        document.getElementById('age_result').innerText = 'Ви дитина';
    } else if (age >= 12 && age < 18) {
        document.getElementById('age_result').innerText = 'Ви підліток';
    } else if (age >= 18 && age < 60) { 
        document.getElementById('age_result').innerText = 'Ви вже дорослий';
    } else if (age >= 60){ 
        document.getElementById('age_result').innerText = 'Ви пенсіонер';
    }
    else { 
        document.getElementById('age_result').innerText = 'Помилка';
    }
}

function znak() { 
    let znak = document.getElementById('znak').value;
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
    let a = parseInt(prompt('Ввдіть початкове число діапазону'));
    let b = parseInt(prompt('Ввдіть кінцеве число діапазону'));
    let i = a;
    let sum = 0;
    while (i <= b) { 
        sum += i;
        i++;
    }
    alert(`Сума всіх чисел у проміжку від ${a} до ${b} буде дорівнювати ${sum}`)
}

function dilnik() { 
    let a = parseInt(prompt('Ввдіть перше число'));
    let b = parseInt(prompt('Ввдіть друге число'));
    let res;
    for (let i = 1; i <= a && i <= b; i++) { 
        if (a % i == 0 && b % i == 0) { 
            res = i;
        }
    }
    alert(`Спільним дільником чисел ${a} та ${b} буде число ${res}`);
}

function dilniki() { 
    let num = parseInt(document.getElementById('dilniki').value);
    let res = '';
    let i = 1;
    while (i <= num) { 
        if (num % i == 0) { 
            res += i + ', ';
        }
        i++;
    }
    document.getElementById('dilniki_result').innerText = `Дільниками числа ${num} є: ${res}`;
}

//-----norma-----
function digits10() { 
    let dodatni = 0,
        videmni = 0,
        nuli = 0,
        parni = 0,
        neparni = 0,
        result = '',
        number = 0,
        i = 0;
    const limit = 10;

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
    result = ` З 10 введених чисел: ${dodatni}  є додатніми, ${videmni} є відє'мними, ${parni} є парними, ${neparni} є непарними. Нулів було введено: ${nuli} ,`;
    document.getElementById('digits10_result').innerText = result;
}

function palindrome() { 
    let num = parseInt(document.getElementById('palindrome').value);
    let first = Math.floor(num / 10000);
    let tsecond = Math.floor(num / 1000);
    let second = tsecond % 10;
    let tfourth = Math.floor(num / 10);
    let fourth = tfourth % 10;
    let fifth = num % 10;
    if (first == fifth && second == fourth) {
        document.getElementById('palindrome_result').innerText = `Число ${num} є паліндоромом`;
    }
    else { 
        document.getElementById('palindrome_result').innerText = `Число ${num} не є паліндоромом`;
    }    
}

function discount() { 
    let num = parseInt(document.getElementById('discount').value);
    if (num < 200) {
        document.getElementById('discount_result').innerText = `Знижка не нарахована. Сума до оплати:${num}`;
    } else if (num >= 200 && num < 300) { 
        document.getElementById('discount_result').innerText = `Знижка 3%. Сума до оплати: ${num-num*0.03}`;
    } else if (num >= 300 && num < 500) { 
        document.getElementById('discount_result').innerText = `Знижка 5%. Сума до оплати: ${num-num*0.05}`;
    } else if (num >= 500) { 
        document.getElementById('discount_result').innerText = `Знижка 7%. Сума до оплати: ${num-num*0.07}`;
    }
}


function day() {
    let answer = true;
    while (answer) { 
        answer = confirm('Сьогодні понеділок! Хочеш побачити наступний день?'),
            answer = confirm('Сьогодні вівторок! Хочеш побачити наступний день?'),
            answer = confirm('Сьогодні середа! Хочеш побачити наступний день?'),
            answer = confirm('Сьогодні четвер! Хочеш побачити наступний день?'),
            answer = confirm('Сьогодні пятниця! Хочеш побачити наступний день?'),
            answer = confirm('Сьогодні субота! Хочеш побачити наступний день?'),
            answer = confirm('Сьогодні неділя! Хочеш побачити наступний день?');
    }
    alert('Гарного дня!');
}

//------------------multiply

let r = 0;
for (let i = 2; i <= 9; i++) { 
    for (let j = 1; j <= 10; j++) { 
        r = i * j;
        console.log(i + ' * ' + j + ' = ' + r);
    }
}

