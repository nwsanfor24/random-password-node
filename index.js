var inquirer = require("inquirer");
var fs = require('fs');

//generate the question 
inquirer.prompt([
    {
        type: 'checkbox',
        message: 'Select your password options',
        name: 'password',
        choices: [
            {
                name: 'lowercase',
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
]).then(function (data) {

    let userChoice = data.choices;
    if(userChoice === 'lowercase') {
        console.log(getRandomLower());
    } else if (userChoice === 'uppercase') {
        console.log(getRandomUpper());
    }

    var filename = data.name + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success! Here is your random password: " + randomPassword());
    });

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

function randomPassword(length = 10) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    var symbols = "!@#$%^&*()-+<>";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

