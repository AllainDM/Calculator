let output = document.getElementById('output');

function out(result) {
    
    console.log('test')
    // output.innerHTML += ` = ${str}`;
    let logSum = output.innerText + ` = ${result}`;
    output.innerText = result;
    
    let log = document.getElementById('logs');
    log.insertAdjacentHTML('beforeend', `<div>${logSum}</div>`);
    document.getElementById('elx').scrollLeft += 300;
    document.getElementById('ely').scrollTop += 300;
}

document.getElementById('sum').addEventListener('click', () => {
    let string = output.innerText;
    console.log(`Строка: ${string}`);
    
    out(sum(string));

    // sum(string);
    // output.innerHTML += ` = ${str}`;

    // sum(string, () => {
    //     console.log('test');
    //     output.innerHTML += ` = ${test}`;
    // });
});
addEventListener('keyup', function(event) {
    if (event.code == 'NumpadEnter' || event.code == 'Enter' || event.key == 'Enter') {
        let string = output.innerText;
        console.log(`Строка: ${string}`);
        out(sum(string));
        }
});

document.getElementById('clear').addEventListener('click', () => {
    output.innerHTML = ``;
    console.log('clear');
});
addEventListener('keyup', function(event) {
    if (event.code == 'Escape' || event.key == 'Escape') {
        output.innerHTML = ``;
        console.log('clear');
    }
});

document.getElementById('back').addEventListener('click', () => {
    output.innerHTML = output.innerHTML.slice(0, -1);
    console.log(output.innerHTML);
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'Backspace' || event.key == 'Backspace') {
        output.innerHTML = output.innerHTML.slice(0, -1);
        console.log(output.innerHTML);
        document.getElementById('elx').scrollLeft += 300;
    }
});

// Проценты временно просто чистят лог
document.getElementById('%').addEventListener('click', () => {
    let log = document.getElementById('logs');
    log.innerHTML = '';
    // output.innerHTML += `%`;
    // console.log('%')
});

document.getElementById('exp').addEventListener('click', () => {
    output.innerHTML += `²`;
    document.getElementById('elx').scrollLeft += 300;
});

document.getElementById('squ').addEventListener('click', () => {
    output.innerHTML += `√`;
    document.getElementById('elx').scrollLeft += 300;
});

document.getElementById('.').addEventListener('click', () => {
    output.innerHTML += `.`;
    console.log('.');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'NumpadDecimal' || event.key == '.') {
        output.innerHTML += `.`;
        console.log('.');
        document.getElementById('elx').scrollLeft += 300;
    }
});

document.getElementById('(').addEventListener('click', () => {
    output.innerHTML += `(`;
    console.log('(');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.key == '(') {
        output.innerHTML += `(`;
        console.log('(');
        document.getElementById('elx').scrollLeft += 300;
    }
});

document.getElementById(')').addEventListener('click', () => {
    output.innerHTML += `)`;
    console.log(')');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.key == ')') {
        output.innerHTML += `)`;
        console.log(')');
        document.getElementById('elx').scrollLeft += 300;
    }
});

document.getElementById('+').addEventListener('click', () => {
    output.innerHTML += `+`;
    console.log('+');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'NumpadAdd' || event.key == '+') {
        output.innerHTML += `+`;
        console.log('+');
        document.getElementById('elx').scrollLeft += 300;
    }
});

document.getElementById('-').addEventListener('click', () => {
    output.innerHTML += `-`;
    console.log('-');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'NumpadSubtract' || event.key == '-') {
        output.innerHTML += `-`;
        console.log('-');
        document.getElementById('elx').scrollLeft += 300;
    }
});

document.getElementById('/').addEventListener('click', () => {
    output.innerHTML += `/`;
    console.log('/');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'NumpadDivide' || event.key == '/') {
        event.preventDefault();
        
        output.innerHTML += `/`;
        console.log('/');
        document.getElementById('elx').scrollLeft += 300;
    }
});

document.getElementById('*').addEventListener('click', () => {
    output.innerHTML += `*`;
    console.log('*');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'NumpadMultiply' || event.key == '*') {
        output.innerHTML += `*`;
        console.log('*');
        document.getElementById('elx').scrollLeft += 300;
    }
});

document.getElementById('1').addEventListener('click', () => {
    output.innerHTML += `1`;
    console.log('1')
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'Numpad1' || event.key == '1') {
        output.innerHTML += `1`;
        console.log('1')
        document.getElementById('elx').scrollLeft += 300;
    }
});
document.getElementById('2').addEventListener('click', () => {
    output.innerHTML += `2`;
    console.log('2');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'Numpad2' || event.key == '2') {
        output.innerHTML += `2`;
        console.log('2');
        document.getElementById('elx').scrollLeft += 300;
    }
});
document.getElementById('3').addEventListener('click', () => {
    output.innerHTML += `3`;
    console.log('3');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'Numpad3' || event.key == '3') {
        output.innerHTML += `3`;
        console.log('3');
        document.getElementById('elx').scrollLeft += 300;
    }
});
document.getElementById('4').addEventListener('click', () => {
    output.innerHTML += `4`;
    console.log('4');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'Numpad4' || event.key == '4') {
        output.innerHTML += `4`;
        console.log('4');
        document.getElementById('elx').scrollLeft += 300;
    }
});
document.getElementById('5').addEventListener('click', () => {
    output.innerHTML += `5`;
    console.log('5');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'Numpad5' || event.key == '5') {
        output.innerHTML += `5`;
        console.log('5');
        document.getElementById('elx').scrollLeft += 300;
    }
});
document.getElementById('6').addEventListener('click', () => {
    output.innerHTML += `6`;
    console.log('6')
});
addEventListener('keyup', function(event) {
    if (event.code == 'Numpad6' || event.key == '6') {
        output.innerHTML += `6`;
        console.log('6');
        document.getElementById('elx').scrollLeft += 300;
    }
});
document.getElementById('7').addEventListener('click', () => {
    output.innerHTML += `7`;
    console.log('7');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'Numpad7' || event.key == '7') {
        output.innerHTML += `7`;
        console.log('7');
        document.getElementById('elx').scrollLeft += 300;
    }
});
document.getElementById('8').addEventListener('click', () => {
    output.innerHTML += `8`;
    console.log('8');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'Numpad8' || event.key == '8') {
        output.innerHTML += `8`;
        console.log('8');
        document.getElementById('elx').scrollLeft += 300;
    }
});
document.getElementById('9').addEventListener('click', () => {
    output.innerHTML += `9`;
    console.log('9');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'Numpad9' || event.key == '9') {
        output.innerHTML += `9`;
        console.log('9');
        document.getElementById('elx').scrollLeft += 300;
    }
});
document.getElementById('0').addEventListener('click', () => {
    output.innerHTML += `0`;
    console.log('0');
    document.getElementById('elx').scrollLeft += 300;
});
addEventListener('keyup', function(event) {
    if (event.code == 'Numpad0' || event.key == '0') {
        output.innerHTML += `0`;
        console.log('0');
        document.getElementById('elx').scrollLeft += 300;
    }
});