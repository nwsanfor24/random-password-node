const Character = require(`./char`);

class Password {
    constructor(charTypes, passLen) {
        this.charTypes = charTypes;
        this.numCharTypes = this.charTypes.length;
        this.passLen = parseInt(passLen);
        this.remainingChar = this.passLen - this.numCharTypes;
        this.password = [];
    }

    generateChar(element) {
        const newCharObj = new Character(element);
        const newChar = newCharObj.finalPick();
        this.password.push(newChar);
    };

    baseChar() {
        this.charTypes.forEach(element => {
            this.generateChar(element);
        });
        return this.password;
    };

    additionalChar() {
        for ( let i = 0; i < this.remainingChar; i++) {
            const randNum = Math.floor((Math.random() * this.numCharTypes));
            const randType = this.charTypes[randNum];
            this.generateChar(randType);
        };
        return this.password;
    };

    finalPasswordArray() {
        this.baseChar();
        this.additionalChar();

        /**
         * Randomly shuffle an array
         * https://stackoverflow.com/a/2450976/1293256
         */

        let currentIndex = this.passLen;
        let tempVal;
        let randIndex;

        while (0 !== currentIndex) {
            randIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            tempVal = this.password[currentIndex];
            this.password[currentIndex] = this.password[randIndex];
            this.password[randIndex] = tempVal;
        }

        return this.password;
    }

    printPassword() {
        this.finalPasswordArray();
        const finalPassword = this.password.join(``);
        return finalPassword;
    }
}

module.exports = Password;