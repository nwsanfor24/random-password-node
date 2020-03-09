var inquirer = require("inquirer");
var fs = require('fs');

const questions = [{
    type: 'checkbox',
    name: 'password',
    message: 'Select your password options',
    choices: [
        {
            name: 'lowercase',
                validate: function(input) {
                    var done = this.async();
                    if (typeof input === 'lowercase') {
                        done(getRandomLower(), true);
                        return;
                    } else {
                        return "You can't do shit";
                    }
                }
            },
            {
                name: 'uppercase',
                validate: function (input) {
                    var done = this.async();
                    if (typeof input === 'uppercase') {
                        done(getRandomUpper(), true);
                        return;
                    } else {
                        return "YOU CAN'T DO SHIT";
                    }
                }
            },
            {
                name: 'number',
                validate: function(input) {
                    var done = this.async();
                    if (typeof input === 'number') {
                        done(getRandomNumber(), true);
                        return;
                    } else {
                        return "7336";
                    }
                }
            },
            {
                name: 'symbol',
                validate: function(input) {
                    var done = this.async();
                    if (typeof input === 'symbol') {
                        done(getRandomSymbol(), true);
                        return;
                    } else {
                        return "!@#$%^^&*";
                    }
                }
            }
    ]
}];

inquirer.prompt(questions).then(answers => {
    console.log(`Success, here is your random password: ${answers['password']}`);
});

//random password function

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}



function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}



function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}



function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

