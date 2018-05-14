const binaryArrayToNumber = arr => {
    const binary = arr.join('');
    
    return parseInt(binary, 2);
};

module.exports = binaryArrayToNumber;