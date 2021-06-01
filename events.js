let output = document.getElementById('output');
let result;

// Последнее введенное число пользователем
let num = true;
let number = '';  
let lastNumber = 1; 
let lastLastNumber = 1;

let arrString = [];     //Массив строк  √
let newArrString = [];


document.getElementById('sum').addEventListener('click', () => {
    arrString = output.innerText.split('');
    sum();
});

document.getElementById('clear').addEventListener('click', () => {
    output.innerHTML = ``;
    mainOutput = ``;
    arrString = [];
    console.log(arrString);
    number = '';
    lastNumber = '';
    lastLastNumber = '';
    console.log('clear')
});

document.getElementById('back').addEventListener('click', () => {
    output.innerHTML = output.innerHTML.slice(0, -1);
    console.log(output.innerHTML);
});

document.getElementById('%').addEventListener('click', () => {
    output.innerHTML += `%`;
    console.log('%')
});

document.getElementById('exp').addEventListener('click', () => {
    output.innerHTML += `²`;
});

document.getElementById('squ').addEventListener('click', () => {
    output.innerHTML += `√`;
});

document.getElementById('.').addEventListener('click', () => {
    output.innerHTML += `.`;
    console.log('.');
});

document.getElementById('(').addEventListener('click', () => {
    output.innerHTML += `(`;
    console.log('(')
});

document.getElementById(')').addEventListener('click', () => {
    output.innerHTML += `)`;
    console.log(')')
});

document.getElementById('+').addEventListener('click', () => {
    output.innerHTML += `+`;
    console.log('+')
});

document.getElementById('-').addEventListener('click', () => {
    output.innerHTML += `-`;
    console.log('-')
});

document.getElementById('/').addEventListener('click', () => {
    output.innerHTML += `/`;
    console.log('/')
});

document.getElementById('*').addEventListener('click', () => {
    output.innerHTML += `*`;
    console.log('*')
});

document.getElementById('1').addEventListener('click', () => {
    output.innerHTML += `1`;
    console.log('1')
});
document.getElementById('2').addEventListener('click', () => {
    output.innerHTML += `2`;
    console.log('2');
});
document.getElementById('3').addEventListener('click', () => {
    output.innerHTML += `3`;
    console.log('3');
});
document.getElementById('4').addEventListener('click', () => {
    output.innerHTML += `4`;
    console.log('4')
});
document.getElementById('5').addEventListener('click', () => {
    output.innerHTML += `5`;
    console.log('5')
});
document.getElementById('6').addEventListener('click', () => {
    output.innerHTML += `6`;
    console.log('6')
});
document.getElementById('7').addEventListener('click', () => {
    output.innerHTML += `7`;
    console.log('7')
});
document.getElementById('8').addEventListener('click', () => {
    output.innerHTML += `8`;
    console.log('8')
});
document.getElementById('9').addEventListener('click', () => {
    output.innerHTML += `9`;
    console.log('9')
});
document.getElementById('0').addEventListener('click', () => {
    output.innerHTML += `0`;
    console.log('0')
});