class Char {
    constructor(characters) {
        this.chars = `!"#$%&'()*+,-./:;<=>?@[]^_\`{|}~1234567890abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ`;
        this.characters = characters;
    }

    charRegex() {
        switch(this.characters) {
            case 'lowercase':
                return /[a-z]/g;
                break;
            case 'uppercase':
                return /[A-Z]/g;
                break;
            case 'number':
                return /[0-9]/g;
                break;
            case 'special':
                return /[\W|_]/g;
                break;
        }
    }

    charArray() {
        const regex = this.charRegex();
        return this.chars.match(regex);
    }

    finalPick() {
        const array = this.charArray();
        const arrayLength = array.length;
        const index = Math.floor((Math.random() * arrayLength));
        return array[index];
    }
}

module.exports = Char;