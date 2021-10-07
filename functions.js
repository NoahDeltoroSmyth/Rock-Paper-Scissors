export function didUserWin(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'win';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'win';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'win';
    } else {
        return 'lose';
    }

}

export function getRandomThrow() {
    const randomThrow = ['rock', 'paper', 'scissors'];
    return randomThrow[Math.floor(Math.random() * 3)];
}

