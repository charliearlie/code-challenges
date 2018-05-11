const chai = require('chai'), expect = chai.expect, should = chai.should;
const KaprekarsConstant = require ('./kaprekarsConstant');

const data = [
  {
    number: 3524,
    numberOfOccurrences: 3,
  },
  {
    number: 1224,
    numberOfOccurrences: 6,
  },
  {
    number: 4124,
    numberOfOccurrences: 5,
  },
  {
    number: 9971,
    numberOfOccurrences: 6,
  },
  {
    number: 3141,
    numberOfOccurrences: 5,
  },
  {
    number: 6793,
    numberOfOccurrences: 7,
  },
  {
    number: 5790,
    numberOfOccurrences: 3,
  },
  {
    number: 7317,
    numberOfOccurrences: 4,
  },
]

describe('Kaprekars Constant', () => {
  describe('it displays the correct value', () => {
    data.forEach(d => { 
      it(`should return ${d.numberOfOccurrences} when the input is ${d.number}`, function() {
        expect(KaprekarsConstant(d.number)).to.equal(d.numberOfOccurrences);
      });
    })
  });
  
  describe('it should not have a number of occurrences above 8', () => {
    for (let i = 1001; i <= 9999; i+= 102) { //102 is just random. I don't want to run too many tests
      it(`${i} should not return higher than 8`, function() {
        expect(KaprekarsConstant(i)).to.be.lessThan(8);
      });
    }
  })
});