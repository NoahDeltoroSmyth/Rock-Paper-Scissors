// import functions and grab DOM elements
import { getRandomThrow, didUserWin } from './functions.js';

const Button = document.getElementById('button');
const Win = document.getElementById('wins');
const Loss = document.getElementById('losses');
const Draw = document.getElementById('draws');
const Error = document.getElementById('error');
const Result = document.getElementById('result');
const resetButton = document.getElementById('reset-button');

// initialize global state
let wins = 0;
let losses = 0;
let draws = 0;
        
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
Button.addEventListener('click', ()=>{
  //console.log(getRandomThrow());
    const selected = document.querySelector('input[type=radio]:checked'); 
    if (!selected){
        return Error.classList.remove('hidden');
    }
    Error.classList.add('hidden');

    const userChoice = selected.value;
    const randomThrow = getRandomThrow();
    const outcome = didUserWin(userChoice, randomThrow);

    if (outcome === 'win'){
        wins++;
        Result.textContent = `You win! The computer threw ${randomThrow}`;
    } else if (outcome === 'lose'){
        losses++;
        Result.textContent = `You lose! The computer threw ${randomThrow}`;
    } else {
        draws++;
        Result.textContent = 'You drew! The computer threw the same!';
    }
    
    Win.textContent = wins;
    Loss.textContent = losses;
    Draw.textContent = draws;

});

resetButton.addEventListener('click', () => {
    const selected = document.querySelector('input[type=radio]:checked'); 

    selected.checked  = false;

    Win.textContent = 0;
    Loss.textContent = 0;
    Draw.textContent = 0;

});