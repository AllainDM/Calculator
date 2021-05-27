let output = document.getElementById('output');
let squ = false;

// let sumvar = 15;

// function sum() {
//     output.innerHTML = `<span> ${sumvar}</span>`
// };

let mainOutput = '';

function calc(str) {
    return (new Function('return ' + str))();
}



document.getElementById('sum').addEventListener('click', () => {
    if (squ) {
        mainOutput += `)`;
        let result = calc(mainOutput);
        output.innerHTML += ` = ${result}`
    } else {
        let result = calc(mainOutput);
        output.innerHTML += ` = ${result}`
    }
    //console.log( calc(output.innerText) );
    console.log(mainOutput);
    console.log('sum')
    console.log(output.innerText);
});

console.log('start');
console.log(output.innerText);

document.getElementById('squ').addEventListener('click', () => {
    output.innerHTML += `√`;
    squ = true;
    mainOutput += `Math.sqrt(`;
    console.log(mainOutput);
});

document.getElementById('.').addEventListener('click', () => {
    output.innerHTML += `.`;
    mainOutput += `.`;
    console.log(mainOutput);
    console.log('.')
});

document.getElementById('clear').addEventListener('click', () => {
    output.innerHTML = ``;
    mainOutput = ``;
    console.log(mainOutput);
    console.log('clear')
});

document.getElementById('(').addEventListener('click', () => {
    output.innerHTML += `(`;
    mainOutput += `(`;
    console.log(mainOutput);
    console.log('(')
});

document.getElementById(')').addEventListener('click', () => {
    output.innerHTML += `)`;
    mainOutput += `)`;
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
});

document.getElementById('/').addEventListener('click', () => {
    output.innerHTML += `/`;
    mainOutput += `/`;
    console.log(mainOutput)
    console.log('/')
});

document.getElementById('*').addEventListener('click', () => {
    output.innerHTML += `*`;
    mainOutput += `*`;
    console.log(mainOutput)
    console.log('*')
});

document.getElementById('1').addEventListener('click', () => {
    output.innerHTML += `1`;
    mainOutput += `1`;
    console.log(mainOutput)
    console.log('1')
});
document.getElementById('2').addEventListener('click', () => {
    output.innerHTML += `2`;
    mainOutput += `2`;
    console.log(mainOutput)
    console.log('2')
});
document.getElementById('3').addEventListener('click', () => {
    output.innerHTML += `3`;
    mainOutput += `3`;
    console.log(mainOutput)
    console.log('3')
});
document.getElementById('4').addEventListener('click', () => {
    output.innerHTML += `4`;
    mainOutput += `4`;
    console.log(mainOutput)
    console.log('4')
});
document.getElementById('5').addEventListener('click', () => {
    output.innerHTML += `5`;
    mainOutput += `5`;
    console.log(mainOutput)
    console.log('5')
});
document.getElementById('6').addEventListener('click', () => {
    output.innerHTML += `6`;
    mainOutput += `6`;
    console.log(mainOutput)
    console.log('6')
});
document.getElementById('7').addEventListener('click', () => {
    output.innerHTML += `7`;
    mainOutput += `7`;
    console.log(mainOutput)
    console.log('7')
});
document.getElementById('8').addEventListener('click', () => {
    output.innerHTML += `8`;
    mainOutput += `8`;
    console.log(mainOutput)
    console.log('8')
});
document.getElementById('9').addEventListener('click', () => {
    output.innerHTML += `9`;
    mainOutput +=  `9`;
    console.log(mainOutput)
    console.log('9')
});
document.getElementById('0').addEventListener('click', () => {
    output.innerHTML += `0`;
    mainOutput += `0`;
    console.log(mainOutput)
    console.log('0')
});