

let winMsg = 'Victory';
let loseMsg = 'Defeat';
let tieMsg = 'Tie';

let moveList = ['Rock','Paper','Scissors'];

//Message
let statusDisplay = document.querySelector('#status-head').innerHTML = "Choose!";

//buttons section
let buttons = document.querySelectorAll('button');


let startGame = (argument) => {
    buttons.forEach((button, index) =>{
        button.textContent = moveList[index];
        button.style.display = 'inline-block';
        button.addEventListener('click', endGame)
    })
}

function randomMove() {
    let move2 = Math.floor(Math.random() * 3);
    return move2;
}

function endGame(event){
    let userMoveText =  event.target.textContent;
    let userInput = moveList.indexOf(userMoveText)
    let computerInput = randomMove()
     
    calcResult(userInput,computerInput)
    
}

function calcResult(move1, move2){
    console.log(move1, move2)
    if (move1 == move2){
        document.querySelector('#status-head').innerHTML = loseMsg;
    }
    else if(move1 =1 ){
        document.querySelector('#status-head').innerHTML = winMsg;
    }
    else {
        document.querySelector('#status-head').innerHTML = loseMsg;
    }
}

startGame()