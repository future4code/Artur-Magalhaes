"use strict";
function mathOperation(operator, number1, number2) {
    switch (operator) {
        case 'add':
            return number1 + number2;
        case 'sub':
            return number1 - number2;
        case 'mult':
            return number1 * number2;
        case 'div':
            return number1 / number2;
    }
}
const result = mathOperation(process.argv[2], Number(process.argv[3]), Number(process.argv[4]));
console.log(`2.\nResposta: ${result}`);
