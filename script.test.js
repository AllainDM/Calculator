// const { test } = require('jest-circus');
const sum = require('./script');

test('text 1', () => {
    expect(sum("5+4")).toBe(9);

});

test('text 2', () => {
    expect(sum("√36+14-7*(21+4)")).toBe(-155);

});

test('text 3', () => {
    expect(sum("(12+4)*15+4²")).toBe(246);

});

test('text 4', () => {
    expect(sum("30+15%-4²+2*3")).toBe(24.5);

});

test('text 5', () => {
    expect(sum("9/3+6²-√81")).toBe(30);

});

test('text 6', () => {
    expect(sum("30.5+16.8*(2+3)")).toBe(114.5);

});

test('text 7', () => {
    expect(sum("0.2+0.2")).toBe(0.4);

});

test('text 8', () => {
    expect(sum("0.5*12*(3+2²)")).toBe(42);

});
