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
                validate: function(value) {
                    if (value.name === 'lowercase') {
                        console.log(getRandomLower());
                        return true;
                    } else {
                        return "You can't do shit";
                    }
                }
            },
            {
                name: 'uppercase',
                validate: function (value) {
                    if (value.name === 'uppercase') {
                        console.log(getRandomUpper());
                        return true;
                    } else {
                        return "YOU CAN'T DO SHIT";
                    }
                }
            },
            {
                name: 'number',
                validate: function(value) {
                    if (value.name === 'number') {
                        console.log(getRandomNumber());
                        return true;
                    } else {
                        return "7336";
                    }
                }
            },
            {
                name: 'symbol',
                validate: function(value) {
                    if (value.name === 'symbol') {
                        console.log(getRandomSymbol());
                        return true;
                    } else {
                        return "!@#$%^^&*";
                    }
                }
            },
        ],
    }
]).then(function (data) {

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
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

