function DNAStrand(dna){
    const dnaMap = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'T',
    };
    
    return [...dna].map(char => dnaMap[char]).join('');
}

module.exports = DNAStrand;