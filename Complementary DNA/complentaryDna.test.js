const chai = require('chai'), expect = chai.expect, should = chai.should;
const DNAStrand = require('./complementaryDna');

const strings = [
    {
        value: 'TTTT',
        expected: 'AAAA',
    },
    {
        value: 'TAACG',
        expected: 'ATTGC',
    },
    {
        value: 'CATA',
        expected: 'GTAT',
    },
    {
        value: 'TTCC',
        expected: 'AAGG',
    },
    {
        value: 'TAACG',
        expected: 'ATTGC',
    },
    {
        value: 'GAGTTCATAACAGA',
        expected: 'CTCAAGTATTGTCT',
    },
    {
        value: 'AACTGCAATTATCAGTAAATAAAAATCAC',
        expected: 'TTGACGTTAATAGTCATTTATTTTTAGTG',
    },
    {
        value: 'GACTGCGTGTACGTAGGTATGGACGCGA',
        expected: 'CTGACGCACATGCATCCATACCTGCGCT',
    },
    {
        value: 'CAACGTGTC',
        expected: 'GTTGCACAG',
    },
    {
        value: 'GGGGGGCGAAAAGCTGGGCT',
        expected: 'CCCCCCGCTTTTCGACCCGA',
    },
    {
        value: 'CTATGAATTGCAGG',
        expected: 'GATACTTAACGTCC',
    },
    {
        value: 'ATCGCCATACCTGTTTCGATC',
        expected: 'TAGCGGTATGGACAAAGCTAG',
    },
    {
        value: 'ACTCCCTTCCT',
        expected: 'TGAGGGAAGGA',
    },
]

describe('Complementary DNA', () => {
    strings.forEach(string => {
        it(`should return ${string.expected} for the input ${string.value}`, () => {
            expect(DNAStrand(string.value)).to.equal(string.expected);
        });
    })
})