// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../functions.js';

const test = QUnit.test;

test('user: rock, computer: rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user: paper, computer: scissors', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('paper', 'scissors');
    expect.equal(actual, expected);
});

test('user: scissors, computer: paper', (expect) => {
    const expected = 'win';
    const actual = didUserWin('scissors', 'paper');
    expect.equal(actual, expected);
});