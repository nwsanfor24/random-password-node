var inquirer = require(`inquirer`);
const Password = require(`./pass`);

inquirer.prompt([
    {
        type: `input`,
        name: `length`,
        message: `Select a number between 8 and 128`,
        validate: function (val) {
            const numVal = parseInt(val.trim());

            if (numval < 129 && numVal > 7) {
                return true;
            } else {
                return error(`WRONG. Enter a number between 8 and 128.`);
            }
        },
        type: `checkbox`,
        name: `characters`,
        message: `Select one or more types of characters for your password`,
        choices: [
            {
                name: `lowercase`
            },
            {
                name: `uppercase`
            },
            {
                name: `number`
            },
            {
                name: `special`
            }
        ],
        validate: (val) => {
            const valueLength = val.length;

            if (valueLength > 0) {
                return true;
            } else {
                return error(`How many times do I have to teach you this listen, old man? Select at least one or more characters`);
            }
        }
    }]).then(({length, characters}) => {
        const generatedPassword = new Password(characters, length);
        console.log(`Success! Here is your password ${generatedPassword.printPassword()}`);
    }).catch((error) => {
        console.log(error(`Oh for Christ's sake, what now!?`));
    });
