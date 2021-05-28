// const { test } = require('jest-circus');
const calc = require('./script');

test('text 1', () => {
    expect(calc("5+4")).toBe(9);

});

test('text 2', () => {
    expect(calc("5+4*(2+2)+ааы")).toBe(21);

});