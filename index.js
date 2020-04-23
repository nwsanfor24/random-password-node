const inquirer = require(`inquirer`);
const chalk = require('chalk');
const Password = require(`./pass`);

const header = chalk.bold.inverse;
const error = chalk.bold.red;
const divider = `\n---------------------------------------------------\n`

// Inquirer Questions

inquirer
    .prompt([
        {
            type: `input`,
            name: `length`,
            message: divider + header(` PASSWORD LENGTH `)+ divider + (`Select a number between 8 and 128:\n`),
            validate: function(val) {

                const numVal = parseInt(val.trim());
                
                if(numVal < 129 && numVal > 7) {
                    return true;
                }

                return error(`Please enter a number between 8 and 128 for your password length.`);
            }
        },
        {
            type: `checkbox`,
            name: `charTypes`,
            message: divider + header(` CHARACTER TYPES `) + divider + (`Select one or more the types of characters for password:\n`),
            choices: [
                {
                    name: `Lowercase`
                },
                {
                    name: `Uppercase`
                },
                {
                    name: `Number`
                },
                {
                    name: `Special`
                }
            ],
            validate: (val) => {
                const valLength = val.length;

                if (val.length > 0) {
                    return true;
                }

                return error(`Please select atleast one character type`);
            }
        }

    ])
    .then(({length, charTypes}) => {
        const yourPassword = new Password(charTypes, length);
        console.log(divider + header(` YOUR PASSWORD HAS BEEN GENERATED! `) + divider + (`${yourPassword.printPassword()}\n`));
    })
    .catch((error) => {
        console.log(error(`Something went wrong...`))
    });

// inquirer.prompt([
//     {
//         type: `input`,
//         name: `length`,
//         message: `Select a number between 8 and 128`,
//         validate: function (val) {
//             const numVal = parseInt(val.trim());

//             if (numval < 129 && numVal > 7) {
//                 return true;
//             } else {
//                 return error(`WRONG. Enter a number between 8 and 128.`);
//             }
//         },
//         type: `checkbox`,
//         name: `characters`,
//         message: `Select one or more types of characters for your password`,
//         choices: [
//             {
//                 name: `lowercase`
//             },
//             {
//                 name: `uppercase`
//             },
//             {
//                 name: `number`
//             },
//             {
//                 name: `special`
//             }
//         ],
//         validate: (val) => {
//             const valueLength = val.length;

//             if (valueLength > 0) {
//                 return true;
//             } else {
//                 return error(`How many times do I have to teach you this listen, old man? Select at least one or more characters`);
//             }
//         }
//     }]).then(({length, characters}) => {
//         const generatedPassword = new Password(characters, length);
//         console.log(`Success! Here is your password ${generatedPassword.printPassword()}`);
//     }).catch((error) => {
//         console.log(error(`Oh for Christ's sake, what now!?`));
//     });
