let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userpoints = document.querySelector("#User");
let comppoints = document.querySelector("#comp")


const draw = () => {
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Game was Draw. Play again.";
}


const showWinner = (userWin, UserChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userpoints.innerText = userScore;
        msg.innerText = `Your Won!.your ${UserChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        comppoints.innerText = compScore;
        msg.innerText = `Your Lost!.${compChoice} beats your ${UserChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (UserChoice) => {
   let compChoice =  genrateCompChoice();
   if(UserChoice === compChoice){
    draw();
   }else{
    let userWin = true ; 
    if(UserChoice === "rock"){ 
        // sci paper
        userWin = compChoice === "paper" ? false : true ; 
    }
    else if(UserChoice === "paper"){
    //rock sci
        userWin = compChoice === "scissors" ? false : true;
   }
   else if(UserChoice === "scissors"){
    //rock paper
        userWin = compChoice === "rock" ? false : true;
   }
   showWinner(userWin,UserChoice,compChoice);
}
};

const genrateCompChoice = () => {
    //rock paper scissors 
    let options = ["rock", "paper", "scissors"];
    let ranIndex = options[Math.floor(Math.random() * options.length)]
    return ranIndex;

}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        let UserChoice = choice.getAttribute("id");
        // console.log("Clicked",UserChoice);
        genrateCompChoice();
        playGame(UserChoice);
    });
});