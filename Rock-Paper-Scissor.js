const container = document.querySelector("#container");

const options = document.querySelector("#options");

choices = ["Rock", "Paper", "Scissor"]
computerchoice = choices[Math.floor(Math.random() * choices.length)];

let compSelect = function (computerchoice) {
    const compSelection = document.createElement("div");
    compSelection.classList.add("compSelection");
    compSelection.textContent = `${computerchoice} is been selected by Computer!`;
    compSelection.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";
    container.insertBefore(compSelection, options);
    userSelect(compSelection);
};

let userSelect = function (playerchoice) {
    const userSelection = document.createElement("div");
    userSelection.classList.add("userSelection");
    userSelection.textContent = `${playerchoice} is been selected by User!`;
    userSelection.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";
    container.insertBefore(userSelection, compSelection);
};

const rockButton = document.querySelector(".rockButton");
rockButton.addEventListener("click", () => {
    let playerchoice = "Rock";
    compSelect(computerchoice);
    userSelect(playerchoice);
});



const paperButton = document.querySelector(".paperButton");
paperButton.addEventListener("click", () => {
    alert("Hello, World!");
});

const scissorButton = document.querySelector(".scissorButton");
scissorButton.addEventListener("click", () => {
    alert("Hello, World!");
});




// comp = "Computer";
// round = 1;
// playerpoint = 0;
// computerpoint = 0;
// function game() {
//     welcome();
//     playername();
// }
// function welcome() {
//     alert("Welcome Player!");
// }
// function playername() {
//     name = prompt("Can you tell me your name?")
//     greetings(name)
// }
// function greetings(name) {
//     alert(`Hello ${name}!`);
//     gamechoice(name);
// }
// function gamechoice(name) {
//     decision = confirm("Are you feeling bored?")
//     if (decision) {
//         alert("So let's play a game!");
//         con = confirm("You ready?");
//         if (con) {
//             playgame(name);
//         }
//         else {
//             alert("Ok, then! We can play some another time!");
//         }
//     }
//     else {
//         alert("Seems like you are having a nice time, Enjoy!");
//     }
// }
// function playgame(name) {
//     alert(`We are going to play Rock-Paper-Scissors ${name}!`);
//     alert("And guess who is your rival in this game?\nYour very own Computer!");
//     alert("I wish you Good Luck!\nLet\'s Start!");
//     playerselection(name);
// }
// function playerselection(name) {
//     alert(`Round ${round} begins!`);
//     alert(`So what do you choose ${name}?`);
//     playerchoice = prompt("Is it Rock, Paper or Scissor?");
//     if (playerchoice == "Rock" || "Paper" || Scissor) {
//         alert(`${playerchoice} is been selected by ${name}`);
//         roundbegin(playerchoice, name);
//     }
//     else {
//         alert("You selected something wrong!");
//     }
// }
// function roundbegin(playerchoice, name) {
//     choices = ["Rock", "Paper", "Scissor"]
//     computerchoice = choices[Math.floor(Math.random() * choices.length)];
//     alert(`${computerchoice} is been selected by ${comp}!`);
//     results(name, playerchoice, computerchoice);
// }
// function results(name, playerchoice, computerchoice) {
//     if (playerchoice == "Rock" && computerchoice == "Scissor") {
//         alert(`${playerchoice} smashes ${computerchoice}!\n${name} Wins!`);
//         playerpoint += 1;
//         alert(`${name} scores ${playerpoint} point!`);
//         roundres(name);
//     }
//     else if (playerchoice == "Rock" && computerchoice == "Paper") {
//         alert(`${computerchoice} covers ${playerchoice}!\n${comp} Wins!`);
//         computerpoint += 1;
//         alert(`${comp} scores ${computerpoint} point!`);
//         roundres(name);
//     }
//     else if (playerchoice == "Paper" && computerchoice == "Rock") {
//         alert(`${playerchoice} covers ${computerchoice}!\n${name} Wins!`);
//         playerpoint += 1;
//         alert(`${name} scores ${playerpoint} point!`);
//         roundres(name);

//     }
//     else if (playerchoice == "Paper" && computerchoice == "Scissor") {
//         alert(`${computerchoice} cuts ${playerchoice}!\n${comp} Wins!`);
//         computerpoint += 1;
//         alert(`${comp} scores ${computerpoint} point!`);
//         roundres(name);
//     }
//     else if (playerchoice == "Scissor" && computerchoice == "Rock") {
//         alert(`${computerchoice} smashes ${playerchoice}!\n${comp} Wins!`);
//         computerpoint += 1;
//         alert(`${comp} scores ${computerpoint} point!`);
//         roundres(name);
//     }
//     else if (playerchoice == "Scissor" && computerchoice == "Paper") {
//         alert(`${playerchoice} cuts ${computerchoice}!\n${name} Wins!`);
//         playerpoint += 1;
//         alert(`${name} scores ${playerpoint} point!`);
//         roundres(name);
//     }
//     else {
//         alert("It\'s a Tie!");
//         roundres(name);
//     }
// }
// function roundres(name) {
//     desicion = confirm(`Do you want to play another round ${name}?`);
//     if (desicion) {
//         round += 1;
//         playerselection(name);
//     }
//     else {
//         alert(`Ok ${name}, we will play some another time\nBye!`);
//         endresult(name);
//     }
// }
// function endresult(name) {
//     alert(`Time to display the end result!\n${round} Rounds Played:\n${name} Points: ${playerpoint}\n${comp} Points: ${computerpoint}`)
//     if (playerpoint > computerpoint) {
//         alert(`${name} Wins!`);
//     }
//     else if (computerpoint > playerpoint) {
//         alert(`${comp} Wins!`);
//     }
//     else {
//         alert("It\'s a Tie!");
//     }
// }
// game();