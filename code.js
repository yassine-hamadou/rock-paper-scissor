let your_score = 0, your_point = 0, comp_score = 0, comp_point = 0;

function computerPlay() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let randomchoice = Math.floor(Math.random() * 3);
    return choice[randomchoice];
}


function playRound(playerSelectionlower, computerSelection) {
    if (playerSelectionlower === "rock"){
        switch(computerSelection){
            case "Paper":
                your_point = 0;
                comp_point = 1;
                return "You Lose! Paper beats Rock";
            case "Scissors":
                your_point = 1;
                comp_point = 0;
                return "You Win! Rock crushes Scissors"
            case "Rock":
                your_point = 0;
                comp_point = 0;
                return "Tie"
        }
    }
    else if (playerSelectionlower === "paper"){
        switch(computerSelection){
            case "Paper":
                your_point = 0;
                comp_point = 0;
                return "Tie";
            case "Scissors":
                your_point = 0;
                comp_point = 1;
                return "You lose! Scissor cuts paper"
            case "Rock":
                your_point = 1;
                comp_point = 0;
                return "You win paper covers rock"
        }
    }
    else if (playerSelectionlower === "scissors"){
        switch(computerSelection){
            case "Paper":
                your_point = 1;
                comp_point = 0;
                return "You win! Scissor cuts paper";
            case "Scissors":
                your_point = 0;
                comp_point = 0;
                return "Tie"
            case "Rock":
                your_point = 0;
                comp_point = 1;
                return "You lose rock cruches scissors"
        }
    }
}


function game(){
    for (let i = 0; i < 5; i++){
        let userchoice = prompt("Make your choice: \"rock\", \"scissors\", or \"rock\"");
        let user_choice_lower = userchoice.toLowerCase();
        console.log(playRound(user_choice_lower, computerPlay()));
        your_score += your_point;
        comp_score += comp_point;
    }
    if (comp_score > your_score){
        console.log("After all computer wins");
    }
    else if (comp_score < your_score){
        console.log("After all you win");
    }
    else {
        console.log("After its a tie");
    }
}