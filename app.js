// import functions and grab DOM elements
import { getRandomThrow, didUserWin } from './functions.js';

const Button = document.getElementById('button');
const Win = document.getElementById('wins');
const Loss = document.getElementById('losses');
const Draw = document.getElementById('draws');
const Error = document.getElementById('error');
const Result = document.getElementById('result');

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
    
});