class Character {
    constructor(charType) {
        this.char = `!"#$%&'()*+,-./:;<=>?@[]^_\`{|}~1234567890abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ`;
        this.charType = charType;
    }

    charRegex() { 
        switch(this.charType) {
            case `Lowercase`:
                return /[a-z]/g;
                break;
            case `Uppercase`:
                return /[A-Z]/g;
                break;
            case `Number`:
                return /[0-9]/g;
                break;
            case `Special`:
                return /[\W|_]/g;
                break;
        }
    }

    charArray() {
        const regex = this.charRegex();
        return this.char.match(regex);
    }

    finalPick() {
        const array = this.charArray();
        const arrayLen = array.length;
        const index = Math.floor((Math.random() * arrayLen));
        return array[index];
    }
}

module.exports = Character;