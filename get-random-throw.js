export function didUserWin(userChoice, computerChoice){
    return userChoice === computerChoice;
    
}

export function getRandomThrow () {
    const randomThrow = ['rock', 'paper', 'scissors'];
    return randomThrow[Math.floor(Math.random() * 3)];
}

