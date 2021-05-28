let output = document.getElementById('output');


// Использование более сложных функций
let squ = false;
let exp = false;

// Последнее введенное число пользователем
let num = true;
let number = '';  
let lastNumber = 1; 

let mainOutput = '';    // Главная строка для преобразования

let arrString = [];     //Массив строк

document.getElementById('sum').addEventListener('click', () => {
    if (squ) {
        mainOutput += `)`;
        let result = calc(mainOutput);
        output.innerHTML += ` = ${result}`
    } else {
        let result = calc(mainOutput);
        output.innerHTML += ` = ${result}`
    }
    console.log(mainOutput);
    console.log('sum')
    console.log(output.innerText);
});

document.getElementById('%').addEventListener('click', () => {
    output.innerHTML += `%`;
    mainOutput = mainOutput.slice(0, -number.length);
    mainOutput += `${lastNumber}*${number}/100`;
    arrString.push(mainOutput);
    console.log(arrString);
    lastNumber = '1';
    number = '';
    console.log(mainOutput);
    console.log('%')
});

document.getElementById('exp').addEventListener('click', () => {
    output.innerHTML += `²`;
    // mainOutput = mainOutput.slice(0, -number.length);
    // mainOutput += `Math.pow(${number}, 2)`;
    mainOutput += '**2';
    arrString.push(mainOutput);
    console.log(arrString);
    console.log(mainOutput);
});

document.getElementById('back').addEventListener('click', () => {
    // mainOutput = mainOutput.slice(0, -1);
    arrString.pop();
    mainOutput = arrString[arrString.length - 1];
    console.log(arrString);
    output.innerHTML = output.innerHTML.slice(0, -1);
    console.log(mainOutput);
});

document.getElementById('squ').addEventListener('click', () => {
    output.innerHTML += `√`;
    squ = true;
    mainOutput += `Math.sqrt(`;
    arrString.push(mainOutput);
    console.log(arrString);
    console.log(mainOutput);
});

document.getElementById('.').addEventListener('click', () => {
    output.innerHTML += `.`;
    mainOutput += `.`;
    arrString.push(mainOutput);
    console.log(arrString);
    console.log(mainOutput);
    console.log('.')
});

document.getElementById('clear').addEventListener('click', () => {
    output.innerHTML = ``;
    mainOutput = ``;
    arrString = [];
    console.log(arrString);
    number = '';
    console.log('clear')
});

document.getElementById('(').addEventListener('click', () => {
    output.innerHTML += `(`;
    mainOutput += `(`;
    arrString.push(mainOutput);
    console.log(arrString);
    lastNumber = number;
    num = false;
    console.log(`number = ${number}`);
    console.log(mainOutput);
    console.log('(')
});

document.getElementById(')').addEventListener('click', () => {
    output.innerHTML += `)`;
    mainOutput += `)`;
    arrString.push(mainOutput);
    console.log(arrString);
    lastNumber = number;
    num = false;
    console.log(`number = ${number}`);
    console.log(mainOutput);
    console.log(')')
});

document.getElementById('+').addEventListener('click', () => {
    if (squ) {
        output.innerHTML += `+`;
        mainOutput += `)+`;
        squ = false;
        console.log(mainOutput);
        console.log('+')
    } else {
        output.innerHTML += `+`;
        mainOutput += `+`;
        console.log(mainOutput);
        console.log('+')
    }
    arrString.push(mainOutput);
    console.log(arrString);
    lastNumber = number;
    num = false;
    console.log(`number = ${number}`);
});

document.getElementById('-').addEventListener('click', () => {
    if (squ) {
        output.innerHTML += `-`;
        mainOutput += `)-`;
        squ = false;
        console.log(mainOutput);
        console.log('-')
    } else {
        output.innerHTML += `-`;
        mainOutput += `-`;
        console.log(mainOutput);
        console.log('-')
    }
    arrString.push(mainOutput);
    console.log(arrString);
    lastNumber = number;
    num = false;
    console.log(`number = ${number}`);
});

document.getElementById('/').addEventListener('click', () => {
    output.innerHTML += `/`;
    mainOutput += `/`;
    arrString.push(mainOutput);
    console.log(arrString);
    lastNumber = number;
    num = false;
    console.log(`number = ${number}`);
    console.log(mainOutput)
    console.log('/')
});

document.getElementById('*').addEventListener('click', () => {
    output.innerHTML += `*`;
    mainOutput += `*`;
    arrString.push(mainOutput);
    console.log(arrString);
    lastNumber = number;
    num = false;
    console.log(`number = ${number}`);
    console.log(mainOutput)
    console.log('*')
});

const one = document.getElementById('1').addEventListener('click', () => {
    if (num) {
        number += `1`;
    } else {
        number = `1`;
    }
    mainOutput += `1`;
    arrString.push(mainOutput);
    console.log(arrString);
    output.innerHTML += `1`;
    num = true;
    console.log(`number = ${number}`);
    console.log(mainOutput)
    console.log('1')
});
one;

document.getElementById('2').addEventListener('click', () => {
    if (num) {
        number += `2`;
    } else {
        number = `2`;
    }
    output.innerHTML += `2`;
    mainOutput += `2`;
    arrString.push(mainOutput);
    console.log(arrString);
    num = true;
    console.log(`number = ${number}`);
    console.log(mainOutput);
    console.log('2');
});
document.getElementById('3').addEventListener('click', () => {
    if (num) {
        number += `3`;
    } else {
        number = `3`;
    }
    output.innerHTML += `3`;
    mainOutput += `3`;
    arrString.push(mainOutput);
    console.log(arrString);
    num = true;
    console.log(`number = ${number}`);
    console.log(mainOutput);
    console.log('3');
});
document.getElementById('4').addEventListener('click', () => {
    if (num) {
        number += `4`;
    } else {
        number = `4`;
    }
    output.innerHTML += `4`;
    mainOutput += `4`;
    arrString.push(mainOutput);
    console.log(arrString);
    num = true;
    console.log(`number = ${number}`);
    console.log(mainOutput)
    console.log('4')
});
document.getElementById('5').addEventListener('click', () => {
    if (num) {
        number += `5`;
    } else {
        number = `5`;
    }
    output.innerHTML += `5`;
    mainOutput += `5`;
    arrString.push(mainOutput);
    console.log(arrString);
    num = true;
    console.log(`number = ${number}`);
    console.log(mainOutput)
    console.log('5')
});
document.getElementById('6').addEventListener('click', () => {
    if (num) {
        number += `6`;
    } else {
        number = `6`;
    }
    output.innerHTML += `6`;
    mainOutput += `6`;
    arrString.push(mainOutput);
    console.log(arrString);
    num = true;
    console.log(`number = ${number}`);
    console.log(mainOutput)
    console.log('6')
});
document.getElementById('7').addEventListener('click', () => {
    if (num) {
        number += `7`;
    } else {
        number = `7`;
    }
    output.innerHTML += `7`;
    mainOutput += `7`;
    arrString.push(mainOutput);
    console.log(arrString);
    num = true;
    console.log(`number = ${number}`);
    console.log(mainOutput)
    console.log('7')
});
document.getElementById('8').addEventListener('click', () => {
    if (num) {
        number += `8`;
    } else {
        number = `8`;
    }
    output.innerHTML += `8`;
    mainOutput += `8`;
    arrString.push(mainOutput);
    console.log(arrString);
    num = true;
    console.log(`number = ${number}`);
    console.log(mainOutput)
    console.log('8')
});
document.getElementById('9').addEventListener('click', () => {
    if (num) {
        number += `9`;
    } else {
        number = `9`;
    }
    output.innerHTML += `9`;
    mainOutput +=  `9`;
    arrString.push(mainOutput);
    console.log(arrString);
    num = true;
    console.log(`number = ${number}`);
    console.log(mainOutput)
    console.log('9')
});
document.getElementById('0').addEventListener('click', () => {
    if (num) {
        number += `0`;
    } else {
        number = `0`;
    }
    output.innerHTML += `0`;
    mainOutput += `0`;
    arrString.push(mainOutput);
    console.log(arrString);
    num = true;
    console.log(`number = ${number}`);
    console.log(mainOutput)
    console.log('0')
});