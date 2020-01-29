let theGame;
const puzzleDiv = document.querySelector('#puzzle');
const guessDiv = document.querySelector('#guesses');

window.addEventListener('keypress', (e) => {

    const guess = String.fromCharCode(e.charCode);
    theGame.makeGuess(guess);
    render();
})

const render = () => {
    puzzleDiv.innerHTML = '';
    guessDiv.textContent = theGame.updateFeedback;

    theGame.puzzle.split('').forEach((letter) => {
        const letterElement = document.createElement('span');
        letterElement.textContent = letter;
        puzzleDiv.appendChild(letterElement);
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('3');
    theGame = new Hangman(puzzle, 5);
    render();
}

document.querySelector('#reset').addEventListener('click', startGame);
startGame();