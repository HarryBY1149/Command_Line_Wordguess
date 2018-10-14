function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.isGuessed = function () {
        if (this.guessed === true) {
            return(this.letter);
        } else {
            return("_");
        }
    };
    this.checkGuess = function (input) {
        if (this.letter === input) {
            this.guessed = true;
            return true;
        }
    };
}

module.exports= Letter;