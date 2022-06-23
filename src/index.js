// *Human Readable Number

// digit arrays - units, tens...

const arrUnits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const arrTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty','seventy', 'eighty', 'ninety'];

// variables
const num = 522535;
console.log(num);
let result = ''; //промежуточный результат
let summaryResult = ''; // итоговый результат
const strFromNum = String(num); //строка с числами
const strLength = strFromNum.length; //длина строки с числами
console.log(toReadable(num));

// *MAIN function
function toReadable(num) {
    summaryResult = findHundredOfThousand(num) + findThousand(num) + findHundred(num) + findTensAndUnits(num) + summaryResult;
    return summaryResult;

// findTensAndUnits function
function findTensAndUnits(num) {
    result = ((strFromNum[strLength-2]) || 0) + ((strFromNum[strLength-1]) || 0);
    return result = checkResultTensAndUnits(num);
}

// checkResultTensAndUnits function
function checkResultTensAndUnits(num) {
    if (result === '0' || result === '00') {
        return (result = '');
    } else if (result < 20) {
        result = arrUnits[result - 1];
    } else if (result % 10 === 0) {
        result = arrTens[result[result.length-2]-2];
    } else {
        result = String(result);
        result = arrTens[result[result.length-2]-2] + ' ' + arrUnits[result[result.length-1]-1];
    }
    return result;
}

// findHundred function
function findHundred(num) {
    if (strFromNum[strFromNum.length-3] === '0') return result = '';
    result = (arrUnits[strFromNum[strFromNum.length-3]-1] + ' hundred ') || 0;
    return result;
}

// findThousand function
function findThousand(num) {
    result = ((strFromNum[strLength-5]) || 0) + ((strFromNum[strLength-4]) || 0);
    if (result === '0' || result === '00') return result = '';
    return result = checkResultTensAndUnits(num) + ' thousand ';
}

// findHundredOfThousand function
function findHundredOfThousand(num) {
    if (strFromNum[strFromNum.length-6] === '0') return result = '';
    result = (arrUnits[strFromNum[strFromNum.length-6]-1] + ' hundred ') || 0;
    return result;
}
}
