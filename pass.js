const Character = require(`./char`);

class Password {

    constructor(characters, passLen) {
        this.characters = characters;
        this.numCharacterTypes = this.characters.length;
        this.passLen = parseInt(passLen);
        this.remainingCharacters = this.passLen - this.numCharacterTypes;
        this.password = [];
    }

    generateCharacter(element) {
        const newCharacterObj = new Character(element);
        const newChar = newCharacterObj.finalPick();
        this.password.push(newChar);
    };

    baseCharacter() {
        this.characters.forEach(element => {
            this.generateCharacter(element);
        });
        return this.password;
    };

    additionalCharacter() {
        for (let i = 0; i < this.remainingCharacters; i++) {
            const randomNumber = Math.floor((Math.random() * this.numCharacterTypes));
            const randType = this.characters[randomNumber];
            this.generateCharacter(randType);
        };
        return this.password;
    };

    finalPassArray() {
        this.baseCharacter();
        this.additionalCharacter();

        let currentIndex = this.passLen;
        let tempVal;
        let randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            tempVal = this.password[currentIndex];
            this.password[currentIndex] = this.password[randomIndex];
            this.password[randomIndex] = tempVal;
        }

        return this.password;
    }

    printPassword() {
        this.finalPassArray();
        const finalPassword = this.password.join(``);
        return finalPassword;
    }
}

module.exports = Password;