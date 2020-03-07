var inquirer = require("inquirer");

//Prompts that ask user to specify their password
function processPassword(answers) {
    console.log("Your password is:" + answers);
}

//generate the question 
userQuestion => {
    inquirer
        .prompt([
            {
                type: 'checkbox',
                message: 'Select your password options',
                name: 'password',
                choices: [
                    {
                        name: 'lowercase'
                    },
                    {
                        name: 'uppercase'
                    },
                    {
                        name: 'number'
                    },
                    {
                        name: 'symbol'
                    },
                ],
            }
        ])
        .then(val => {
            if (val.choice) {
                this.generatePassword();
            } else {
                this.quit();
            }
        });
}
    


class randomFunction {
    constructor(lower, upper, number, symbol) {
        this.lower = lower;
        this.upper = upper;
        this.number = number;
        this.symbol = symbol;
    }
}



//Password functions
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
        { lower },
        { upper },
        { number },
        { symbol }
    ].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    //loop
    for (let i = 0; i < length; i += typesCount) {
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

