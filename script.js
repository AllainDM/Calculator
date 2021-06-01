function sum() {
    
    // arr();
    for (i = 0; i < arrString.length; i++) {
        if (!isNaN(arrString[i])) {
            number += arrString[i];
            console.log(`Число: ${number}`);
            // console.log(`тут число: ${arrString[i]}`)
        }
        if (isNaN(arrString[i])) {
            lastLastNumber = lastNumber;
            lastNumber = number;
            number = '';
            console.log(`Самое последнее число: ${lastLastNumber}`);
            console.log(`Последнее число: ${lastNumber}`);
        }
        if (arrString[i] == '%') {
            arrString[i - lastNumber.length] = `(${arrString[i - lastNumber.length]}`
            delete arrString[i];
            for (n = i + 1; n <= arrString.length; n++) {
                if (isNaN(arrString[n])) {
                    console.log(`index: ${n}`);
                    if (arrString[n] == undefined) {
                        arrString[n] = `*${lastLastNumber}/100)`;
                    } else {
                        arrString[n] = `*${lastLastNumber}/100)` + arrString[n];
                    }
                    console.log(n);
                    break;
                }
            }
        } 
        if (arrString[i] == '²') {
            arrString[i] = '**2';
        } 
        if (arrString[i] == '√') {
            delete arrString[i];
            for (n = i + 1; n <= arrString.length; n++) {
                if (isNaN(arrString[n])) {
                    console.log(`index: ${n}`);
                    if (arrString[n] == undefined) {
                        arrString[n] = '**0.5';
                    } else {
                        arrString[n] = '**0.5' + arrString[n];
                    }
                    console.log(n);
                    break;
                }
            }
        } 
    }

    let x = arrString.join('');
    result = calc(x);
    
    output.innerHTML += ` = ${result}`

}

module.exports = sum;

function calc(str) {
    return (new Function('return ' + str))();
}