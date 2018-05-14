const chai = require('chai'), expect = chai.expect, should = chai.should;
const highAndLow = require('./highestLowest');

const testData = [
    {
        values: '4 11 14 9 10 100 44 3 5 12',
        expected: '100 3',
    },
    {
        values: '4 5 29 54 4 0 -214 542 -64 1 -3 6 -6',
        expected: '542 -214',
    },
    {
        values: '1 -1',
        expected: '1 -1',
    },
    {
        values: '44 55 33 22 88 99 77 66',
        expected: '99 22',
    },
    {
        values: '1 2 3 4 7 5 6',
        expected: '7 1',
    },
];

describe('High And Low', () => {
    it(`should display the correct values`, () => {
        testData.forEach(element => {
            expect(element.expected).to.equal(highAndLow(element.values));
        });
    });
});