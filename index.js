var word = require("./word.js");
var inquirer = require("inquirer");

var wordArr = ['dog', 'monkey', 'walrus', 'kangaroo', 'whale', 'lion', 'jaguar', 'lemur', 'gorilla', 'elephant', 'horse', 'buffalo', 'hippopotamus']

var x = Math.floor(Math.random()*wordArr.length);
var guesses = 10;

var currentWord= new word.Word(wordArr[x])
var newWord = currentWord.word;
var allGuessed= 0;
var counter = 0;
currentWord.makeWord()
nextGuess();

function nextGuess() {inquirer.prompt([
    {
        name:"guess",
        message: "Make a guess!",
    }
]).then(function(response){    
    for (var i = 0; i<newWord.length; i++){
       if(newWord[i].checkGuess(response.guess)){
           counter++;
       }
        
    };
    console.log(counter)
    if(counter === 0 ){
        guesses --;
        counter = 0;;
    };
    allGuessed += counter;
    counter = 0;
    console.log(allGuessed);
    console.log(guesses);
    currentWord.makeWord();
    console.log(newWord.length);

    if (guesses === 0) {
        console.log("Game Over!");
    } else if(allGuessed >= newWord.length) {
        console.log("You win!");
    } else {
        console.log("The game continues");
        nextGuess();
    }
})};
