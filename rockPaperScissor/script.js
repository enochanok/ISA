
let winMsg = 'Victory';
let loseMsg = 'Defeat';
let tieMsg = 'Tie';
let moveList = ['Rock', 'Paper', 'Scissors'];

let moveDisplays = document.querySelectorAll(".move-display h2");
let button = document.querySelectorAll("button");
let moves = {};

let startGame = () => {
    document.getElementById('status-head').innerHTML = "Choose!";
    for (i = 0; i < button.length; i++) {
        button[i].removeEventListener("click", startGame);
        button[i].addEventListener("click", endGame);
        button[i].style.visibility = 'visible';
        button[i].innerHTML = moveList[i];
        button[i].style.display = 'inline-block';
    }
    for (i = 0; i < moveDisplays.length; i++) {
        moveDisplays[i].style.visibility = 'hidden';
    }
}

//to generate random value
let randomMove = () =>{
    return Math.floor(Math.random() * 3);
}

let endGame = (event) => {
    let userMoveText = event.target.innerHTML;
    let userInput = moveList.indexOf(userMoveText);
    let computerInput = randomMove();
    let moves = calculate(userInput, computerInput);
    document.getElementById('status-head').innerHTML = moves['Message'];
    for (i = 0; i < button.length; i = i + 2) {
        button[i].style.visibility = 'hidden';
    }
    document.querySelectorAll('button')[1].innerHTML = "Play Again";
    button[1].addEventListener("click", startGame);
    for (i = 0; i < moveDisplays.length; i++) {
        moveDisplays[i].style.visibility = 'visible';
    }
    
    moveDisplays[0].innerHTML = "Your played " + moveList[parseInt(moves["User"])];
    moveDisplays[1].innerHTML = "Computer played " + moveList[parseInt(moves["Computer"])];
}



// Taking and comparing the userInput and computerInput
// and returning the display messages.
let calculate = (move1, move2) =>{
    if (move1 == move2){
        return {
            "Message" : tieMsg,
            "User": move1,
            "Computer" :move2};
    } else if (
        (move1 == "0" && move2 == "2") || 
        (move1 == "1" && move2 == "0") || 
        (move1 == "2" && move2 == "1")){
        return {
            "Message": winMsg,
            "User": move1,
            "Computer": move2
        };
    } else{
        return {
            "Message": loseMsg,
            "User": move1,
            "Computer": move2
        };
    }
}

//calling the startGame function
document.addEventListener("onload", startGame());