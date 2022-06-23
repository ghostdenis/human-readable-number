// *Human Readable Number

// digit arrays - units, tens...

const arrUnits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const arrTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty','seventy', 'eighty', 'ninety'];

// variables
let num = 512025;
let result = '';
let summaryResult = '';
console.log(toReadable(num));

// MAIN function
function toReadable(num) {
    return findTensAndUnits(num);
}

// findTensAndUnits function
function findTensAndUnits(num) {
    const strUnits = String(num);
    let strLength = strUnits.length;

    result = ((strUnits[strLength-2]) || 0) + ((strUnits[strLength-1]) || 0);

    if (result < 20) {
        result = arrUnits[result - 1];
    } else if (result % 10 === 0) {
        result = arrTens[result[result.length-2]-2];
    } else {
        console.log(result);
        result = String(result);
        result = arrTens[result[result.length-2]-2] + ' ' + arrUnits[result[result.length-1]-1];
    }
    return result;
}

//str.charAt(index) - Метод charAt() возвращает указанный символ из строки.