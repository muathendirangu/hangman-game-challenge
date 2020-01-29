class Hangman{
    constructor(word, noOfGuesses){
        this.word = word.toLowerCase().split('');
        this.noOfGuesses = noOfGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
    }

    get puzzle(){
        let puzzle = "";
        this.word.forEach( (letter) => {
            if(this.guessedLetters.includes(letter) || letter ===''){
                puzzle += letter;
            }else{
                puzzle += "*";
            }
        });
        return puzzle;
    }

    makeGuess (guess){
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        if(isUnique){
            this.guessedLetters.push(guess);
        }
        if(isUnique && isBadGuess){
            this.noOfGuesses--
        }
        checkIfSolved();
    }

    checkIfSolved(){
        const gotRight = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === '');
        if (gotRight) {
            this.status = "successful";
        }else if(this.noOfGuesses === 0){
            this.status = "unsuccessful";
        }
        else{
            this.status = "playing";
        }
    }

    updateFeedback(){
        if (this.status === "playing") {
            return `Guesses remaining are ${this.noOfGuesses}`;
        }else if(this.status === "unsuccessful"){
            return `Sorry you failed: the correct word was ${this.word.join('')}`;
        }else if(this.status === "successful"){
            return "Awesome you are really  good at guessing"
        }
    }
}