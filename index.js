var inquirer = require("inquirer");

//Prompts that ask user to specify their password
inquirer
    .prompt([
        
]);

const randomFunction = {
    lower: randomLower,
    upper: randomUpper,
    number: randomNumber,
    symbol: randomSymbol,
}

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [
        {lower},
        {upper},
        {number},
        {symbol}
    ].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    //loop
    for (let i=0; i<length; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunction[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

//Get random lowercase letter
function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Get random uppercase letter
function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Get random number
function randomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//Get random symbol
function randomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

