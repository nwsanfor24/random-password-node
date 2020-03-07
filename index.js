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
]).then(function (data) {

    var filename = data.name + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success! Here is your random password " + randomPassword());
    });

});





//random password function
function randomPassword(length = 12) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

