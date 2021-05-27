
function expect(value) {
    return {
        toBE: exp => {
            if (value === exp) {
                console.log('ok');
            } else {
                console.error(`Value is ${value}, but expectation is ${exp}`);
            }
            
        }
    }
}

expect(calc(15+5)).toBE(20);

expect(calc(35/(10-5))).toBE(7);

expect(calc(33*33)).toBE(1089);

expect(calc(19*(2+2))).toBE(76);


