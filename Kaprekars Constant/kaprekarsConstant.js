function KaprekarsConstant(num) {
    let result = num;
    let counter = 0;
    
    while (result !== 6174) {
        counter++;
        const ascending = +result.toString().split('').sort().join('');
        const descending = +result.toString().split('').sort().reverse().join('');
        
        let resultString = (descending - ascending).toString();
        
        result = resultString.length !== 4 ? +resultString.padEnd(4, '0') : +resultString;
    }
    return counter;
}

console.log(KaprekarsConstant(7317));

module.exports = KaprekarsConstant;