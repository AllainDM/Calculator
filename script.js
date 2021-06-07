
function sum(str) {
    str = str.split('');
    for (i = 0; i < str.length; i++) {
        if (str[i] == '²') {
            str[i] = '**2';
        } 
        if (str[i] == '√') {
            delete str[i];
            for (n = i + 1; n <= str.length; n++) {
                if (isNaN(str[n])) {
                    // console.log(`index: ${n}`);
                    if (str[n] == undefined) {
                        str[n] = '**0.5';
                    } else {
                        str[n] = '**0.5' + str[n];
                    }
                    // console.log(n);
                    break;
                }
            }
        } 
    }

    str = str.join('');
    str = calc(str);
    return str;

}

function calc(str) {
    return (new Function('return ' + str))();
}

module.exports = sum;

