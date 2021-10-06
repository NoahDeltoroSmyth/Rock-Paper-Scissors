// import functions and grab DOM elements
import { getRandomThrow } from "./get-random-throw.js";

const Button = document.getElementById('button');
const Win = document.getElementById('wins');
const Loss = document.getElementById('losses');
const Error = document.getElementById('error');

// initialize global state
let wins = 0;
let losses = 0;
         
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
Button.addEventListener('click', ()=>{
    console.log(getRandomThrow());
});