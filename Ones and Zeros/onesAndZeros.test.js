const chai = require('chai'), expect = chai.expect, should = chai.should;
const binaryArrayToNumber = require('./onesAndZeros');

const binaryData = [
    {
        value: [1, 0, 1, 1, 0, 1],
        expected: 45,
    },
    {
        value: [1, 0, 1],
        expected: 5,
    },
    {
        value: [1, 1, 0, 0, 0],
        expected: 24,
    },
    {
        value: [1, 1, 1, 1, 0, 1, 1, 0],
        expected: 246,
    },
    {
        value: [1, 0, 1, 0],
        expected: 10,
    },
    {
        value: [1],
        expected: 1,
    },
    {
        value: [1, 0, 0],
        expected: 4,
    },
    {
        value: [1, 1, 1, 1],
        expected: 15,
    },
]

describe('Binary array to number', () => {
    binaryData.forEach(element => {
        it(`should display ${element.expected} when the input array is ${element.value.toString()}`, () => {
            expect(element.expected).to.equal(binaryArrayToNumber(element.value));
        });
    });
});