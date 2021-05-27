//const { test } = require('jest-circus');
const {calc} = require('./script');

test( 'text', () => {
    expect(calc(5+4)).toBe(9)

});