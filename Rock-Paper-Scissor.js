const container = document.querySelector("#container");

const options = document.querySelector("#options");

const footer = document.querySelector(".footer");

let up = 0;

let cp = 0;

const userPoints = document.querySelector(".userPoints");
userPoints.textContent = up;

const compPoints = document.querySelector(".compPoints");
compPoints.textContent = cp;

choices = ["Rock", "Paper", "Scissor"]
computerchoice = choices[Math.floor(Math.random() * choices.length)];

const computerSelection = document.createElement("div");
computerSelection.classList.add("compSelection");
computerSelection.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

let compSelect = function (computerchoice) {
    computerSelection.textContent = `${computerchoice} is been selected by Computer!`;
    container.insertBefore(computerSelection, options);
};

const userSelection = document.createElement("div");
userSelection.classList.add("userSelection");
userSelection.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

let userSelect = function (playerchoice, computerchoice) {
    userSelection.textContent = `${playerchoice} is been selected by User!`;
    container.insertBefore(userSelection, options);
    compSelect(computerchoice);
};

const result = document.createElement("div");
result.classList.add("result");
result.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

let results = function (playerchoice, computerchoice) {
    if (playerchoice == "Rock" && computerchoice == "Scissor") {
        result.textContent = `${playerchoice} smashes ${computerchoice}!`;
    }
    else if (playerchoice == "Rock" && computerchoice == "Paper") {
        result.textContent = `${computerchoice} covers ${playerchoice}!`;
    }
    else if (playerchoice == "Paper" && computerchoice == "Rock") {
        result.textContent = `${playerchoice} covers ${computerchoice}!`;
    }
    else if (playerchoice == "Paper" && computerchoice == "Scissor") {
        result.textContent = `${computerchoice} cuts ${playerchoice}!`;
    }
    else if (playerchoice == "Scissor" && computerchoice == "Rock") {
        result.textContent = `${computerchoice} smashes ${playerchoice}!`;
    }
    else if (playerchoice == "Scissor" && computerchoice == "Paper") {
        result.textContent = `${playerchoice} cuts ${computerchoice}!`;
    }
    else {
        result.textContent = "It\'s a Tie!";
    }
    container.appendChild(result);
};

const winner = document.createElement("div");
winner.classList.add("winner");
winner.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

let winners = function (playerchoice, computerchoice) {
    if (playerchoice == "Rock" && computerchoice == "Scissor") {
        winner.textContent = "User Wins! Computer Lose!";
        up += 1;
        userPoints.textContent = up;
    }
    else if (playerchoice == "Rock" && computerchoice == "Paper") {
        winner.textContent = "Computer Wins! User Lose!";
        cp += 1;
        compPoints.textContent = cp;
    }
    else if (playerchoice == "Paper" && computerchoice == "Rock") {
        winner.textContent = "User Wins! Computer Lose!";
        up += 1;
        userPoints.textContent = up;
    }
    else if (playerchoice == "Paper" && computerchoice == "Scissor") {
        winner.textContent = "Computer Wins! User Lose!";
        cp += 1;
        compPoints.textContent = cp;
    }
    else if (playerchoice == "Scissor" && computerchoice == "Rock") {
        winner.textContent = "Computer Wins! User Lose!";
        cp += 1;
        compPoints.textContent = cp;
    }
    else if (playerchoice == "Scissor" && computerchoice == "Paper") {
        winner.textContent = "User Wins! Computer Lose!";
        up += 1;
        userPoints.textContent = up;
    }
    else {
        winner.textContent = "No one Wins! No one Lose!";
    }
    container.appendChild(winner);
    setInterval(reload, infinite);
}

let reload = function () {
    userSelection.remove();
    computerSelection.remove();
    result.remove();
    winner.remove();
}

const rockButton = document.querySelector(".rockButton");
rockButton.addEventListener("click", () => {
    let playerchoice = "Rock";
    userSelect(playerchoice, computerchoice);
    results(playerchoice, computerchoice);
    winners(playerchoice, computerchoice);
});

const paperButton = document.querySelector(".paperButton");
paperButton.addEventListener("click", () => {
    let playerchoice = "Paper";
    userSelect(playerchoice, computerchoice);
    results(playerchoice, computerchoice);
    winners(playerchoice, computerchoice);
});

const scissorButton = document.querySelector(".scissorButton");
scissorButton.addEventListener("click", () => {
    let playerchoice = "Scissor";
    userSelect(playerchoice, computerchoice);
    results(playerchoice, computerchoice);
    winners(playerchoice, computerchoice);
});