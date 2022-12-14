import Hangman from './hangman-functions.js'
import getPuzzle from './requests.js'


// RENDER THE PUZZLE AND THE GUESSES LEFT TO THE BROWSER
const puzzleEl = document.querySelector( '#puzzle' )
const guessesEl = document.querySelector( '#guesses' )
let game1


window.addEventListener( 'keypress', ( event ) => {
    const guessFromKeyPress = String.fromCharCode( event.charCode )
    // This event only fires when someone presses a key
    game1.makeGuess( guessFromKeyPress ) 
    render()
} )


const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach( ( letter ) => {
        const letterEl = document.createElement( 'span' )
        letterEl.textContent = letter
        puzzleEl.appendChild( letterEl )
    } )
}


const startGame = async () => {
    const puzzle = await getPuzzle( '2' )
    game1 = new Hangman( puzzle, 5 )
    render()
}


document.querySelector( '#reset' ).addEventListener( 'click', startGame )

startGame()