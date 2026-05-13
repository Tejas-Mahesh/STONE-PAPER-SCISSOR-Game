let score = {
    win:0,
    lost:0,
    tie:0
};

function playGame(userChoice){

    let choices = ['STONE','PAPER','SCISSOR'];

    let randomNumber = Math.floor(Math.random()*3);

    let computerChoice = choices[randomNumber];

    let result = '';

    if(userChoice === computerChoice){
        result = "It's a TIE";
        score.tie++;
    }

    else if(
        (userChoice === 'STONE' && computerChoice === 'SCISSOR') ||
        (userChoice === 'PAPER' && computerChoice === 'STONE') ||
        (userChoice === 'SCISSOR' && computerChoice === 'PAPER')
    ){
        result = "YOU WON 🎉";
        score.win++;
    }

    else{
        result = "COMPUTER WON 🤖";
        score.lost++;
    }

    document.getElementById('result').innerText = result;

    document.getElementById('moves').innerText =
    `You Chose ${userChoice} | Computer Chose ${computerChoice}`;

    document.getElementById('win').innerText = score.win;
    document.getElementById('lost').innerText = score.lost;
    document.getElementById('tie').innerText = score.tie;
}

function resetScore(){

    score.win = 0;
    score.lost = 0;
    score.tie = 0;

    document.getElementById('win').innerText = 0;
    document.getElementById('lost').innerText = 0;
    document.getElementById('tie').innerText = 0;

    document.getElementById('result').innerText = 'Start The Game';

    document.getElementById('moves').innerText = '';
}
