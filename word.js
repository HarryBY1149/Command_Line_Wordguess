var Letter = require("./letter.js");

function Word(string) {
    this.word = [];
    this.timesCalled = 0;
    this.makeWord = function () {
        var displayArr = [];
        if (this.timesCalled === 0) {
            for (var i = 0; i < string.length; i++) {
                var letter = new Letter(string[i])
                this.word.push(letter);
                var display = this.word[i].isGuessed();
                displayArr.push(display);
                this.timesCalled++;
            }
        } else {
            for (var i = 0; i < string.length; i++) {
                var display = this.word[i].isGuessed();
                displayArr.push(display);
            }
        }
        console.log("**  " + displayArr.join("  ") + "  **");
    };


    this.newGuess = function (input) {
        this.word.forEach(element => {
            element.checkGuess(input);
        });
    }
};


module.exports = {
    Word
}