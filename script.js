function calc(str) {
    return (new Function('return ' + str))();
}

module.exports = calc;

