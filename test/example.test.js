// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from "../functions.js";

const test = QUnit.test;

test('user: rock, computer: rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = ;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
