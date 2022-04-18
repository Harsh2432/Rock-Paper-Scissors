const container = document.querySelector("#container");

const inner = document.querySelector(".inner");

const options = document.querySelector("#options");

const user = document.querySelector(".user");

const rockButton = document.querySelector(".rockButton");

const paperButton = document.querySelector(".paperButton");

const scissorButton = document.querySelector(".scissorButton");

const userPoints = document.querySelector(".userPoints");

const compPoints = document.querySelector(".compPoints");

const comp = "Computer";

let pName = String;

let playerchoice = String;

let computerchoice = String;

let round = 1;

let playerPoint = 0;

let computerPoint = 0;

const welcome = document.createElement("div");
welcome.classList.add("welcome");
welcome.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

let welcomePlayer = function () {
    welcome.textContent = "Welcome Player!";

    container.insertBefore(welcome, inner);

    setTimeout(playerName, 3000);
};

const player = document.createElement("div");
player.classList.add("player");
player.style.cssText = "display: flex; flex-direction:column; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px; gap: 10px;";

let playerName = function () {

    container.replaceChild(player, welcome);

    const question = document.createElement("div");
    question.classList.add("question");
    question.textContent = "Can you tell me your name?";
    question.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 490px;";

    player.appendChild(question);

    const innerName = document.createElement("div");
    innerName.classList.add("innerName");
    innerName.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 490px; gap: 10px;";

    const inputName = document.createElement("input");
    inputName.setAttribute("id", "inputName");
    inputName.style.cssText = "display: flex; justify-content: center; align-items: center; text-align: center; color: black; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 300px;";

    innerName.appendChild(inputName);

    const sumbit = document.createElement("button");
    sumbit.classList.add("submit");
    sumbit.textContent = "SUBMIT";
    sumbit.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; background-color: coral; font-family: monospace; font-size: 18px; font-weight: bold; padding: 10px; border-radius: 10px;";

    sumbit.addEventListener("click", () => {
        pName = document.getElementById("inputName").value;
        user.textContent = pName.toUpperCase();
        greetings();
    });

    innerName.appendChild(sumbit);

    player.appendChild(innerName);
};

const greeting = document.createElement("div");
greeting.classList.add("greeting");
greeting.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

let greetings = function () {

    container.replaceChild(greeting, player);

    greeting.textContent = `Hello ${pName}!`;
    rounds();
};

const roundDec = document.createElement("div");
roundDec.classList.add("roundDec");
roundDec.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

let rounds = function () {

    container.insertBefore(roundDec, inner);

    roundDec.textContent = `Round ${round} Begins!`;
    pSelection();
};

userPoints.textContent = playerPoint;

compPoints.textContent = computerPoint;

const playerSelect = document.createElement("div");
playerSelect.classList.add("playerSelect");
playerSelect.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

let pSelection = function () {
    playerSelect.textContent = `So what do you choose ${pName}?`;

    container.insertBefore(playerSelect, options);

    rockButton.addEventListener("click", () => {
        playerchoice = "Rock";
        userSelect();
    });

    paperButton.addEventListener("click", () => {
        playerchoice = "Paper";
        userSelect();
    });

    scissorButton.addEventListener("click", () => {
        playerchoice = "Scissor";
        userSelect();
    });
};

const userSelection = document.createElement("div");
userSelection.classList.add("userSelection");
userSelection.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

let userSelect = function () {
    greeting.remove();
    playerSelect.remove();
    userSelection.textContent = `${playerchoice} is been selected by ${pName}!`;

    container.insertBefore(userSelection, options);

    compSelect();
};

let choices = ["Rock", "Paper", "Scissor"];
computerchoice = choices[Math.floor(Math.random() * choices.length)];

const computerSelection = document.createElement("div");
computerSelection.classList.add("compSelection");
computerSelection.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

let compSelect = function () {
    computerSelection.textContent = `${computerchoice} is been selected by Computer!`;

    container.insertBefore(computerSelection, options);

    results();
};

const result = document.createElement("div");
result.classList.add("result");
result.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

const scorePlus = document.createElement("div");
scorePlus.classList.add("scorePlus");
scorePlus.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

let results = function () {
    if (playerchoice == "Rock" && computerchoice == "Scissor") {
        result.textContent = `${playerchoice} smashes ${computerchoice}!`;
        playerPoint += 1;
        scorePlus.textContent = `${pName} scores 1 point!`;
    }
    else if (playerchoice == "Rock" && computerchoice == "Paper") {
        result.textContent = `${computerchoice} covers ${playerchoice}!`;
        computerPoint += 1;
        scorePlus.textContent = `${comp} scores 1 point!`;
    }
    else if (playerchoice == "Paper" && computerchoice == "Rock") {
        result.textContent = `${playerchoice} covers ${computerchoice}!`;
        playerPoint += 1;
        scorePlus.textContent = `${pName} scores 1 point!`;
    }
    else if (playerchoice == "Paper" && computerchoice == "Scissor") {
        result.textContent = `${computerchoice} cuts ${playerchoice}!`;
        computerPoint += 1;
        scorePlus.textContent = `${comp} scores 1 point!`;
    }
    else if (playerchoice == "Scissor" && computerchoice == "Rock") {
        result.textContent = `${computerchoice} smashes ${playerchoice}!`;
        computerPoint += 1;
        scorePlus.textContent = `${comp} scores 1 point!`;
    }
    else if (playerchoice == "Scissor" && computerchoice == "Paper") {
        result.textContent = `${playerchoice} cuts ${computerchoice}!`;
        playerPoint += 1;
        scorePlus.textContent = `${pName} scores 1 point!`;
    }
    else {
        result.textContent = "It\'s a Tie!";
        scorePlus.textContent = "No one scores any point!";
    }

    userPoints.textContent = playerPoint;
    compPoints.textContent = computerPoint;

    container.appendChild(result);

    container.appendChild(scorePlus);

    setTimeout(pageReload, 10000);
};

let pageReload = function () {
    userSelection.remove();
    computerSelection.remove();
    result.remove();
    scorePlus.remove();
    roundAgain();
};

const sayBye = document.createElement("div");
sayBye.classList.add("sayBye");
sayBye.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

let roundAgain = function () {
    clearTimeout(setTimeout(pageReload, 10000));

    const anotherRound = document.createElement("div");
    anotherRound.classList.add("anotherRound");
    anotherRound.style.cssText = "display: flex; flex-direction:column; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px; gap: 10px;";

    const innerQuestion = document.createElement("div");
    innerQuestion.classList.add("innerQuestion");
    innerQuestion.textContent = `Do you want to play another round ${pName}?`;
    innerQuestion.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 490px;";

    anotherRound.appendChild(innerQuestion);

    const playerDec = document.createElement("div");
    playerDec.classList.add("playerDec");
    playerDec.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 490px; gap: 10px;";

    const yesButton = document.createElement("button");
    yesButton.classList.add("yesButton");
    yesButton.textContent = "YES";
    yesButton.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; background-color: coral; font-family: monospace; font-size: 18px; font-weight: bold; padding: 10px; border-radius: 10px;";

    yesButton.addEventListener("click", () => {
        anotherRound.remove();
        round += 1;
        rounds();
    });

    playerDec.appendChild(yesButton);

    const noButton = document.createElement("button");
    noButton.classList.add("noButton");
    noButton.textContent = "NO";
    noButton.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; background-color: coral; font-family: monospace; font-size: 18px; font-weight: bold; padding: 10px; border-radius: 10px;";

    noButton.addEventListener("click", () => {
        anotherRound.remove();
        sayBye.textContent = `Ok ${pName}, we will play some another time! Bye!`;

        container.insertBefore(sayBye, inner);

        setTimeout(endResult, 10000);
    });

    playerDec.appendChild(noButton);

    anotherRound.appendChild(playerDec);

    container.replaceChild(anotherRound, roundDec);
};

let endResult = function () {
    const disResult = document.createElement("div");
    disResult.classList.add("disResult");
    disResult.textContent = "Time to display end Result! ";
    disResult.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

    container.replaceChild(disResult, sayBye);

    disPoint();
};

const morePoints = document.createElement("div");
morePoints.classList.add("morePoints");
morePoints.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

let disPoint = function () {
    if (playerPoint > computerPoint) {
        morePoints.textContent = `${pName} scores ${playerPoint - computerPoint} more points than Computer!`;
    }
    else if (playerPoint < computerPoint) {
        morePoints.textContent = `Computer scores ${computerPoint - playerPoint} more than ${pName}!`;
    }
    else {
        morePoints.textContent = `${pName} and Computer score equal points!`;
    }

    container.appendChild(morePoints);

    disWinner();
};

const winner = document.createElement("div");
winner.classList.add("winner");
winner.style.cssText = "display: flex; flex: 1; justify-content: center; align-items: center; color: white; border: 2px solid white; border-radius: 10px; padding: 10px; font-family: monospace; font-size: 18px; width: 515px;";

let webReload = function () {
    location.reload();
}

let disWinner = function () {
    if (playerPoint > computerPoint) {
        winner.textContent = `${pName} Wins! Computer Lose!`;
    }
    else if (playerPoint < computerPoint) {
        winner.textContent = `Computer Wins! ${pName} Lose!`;
    }
    else {
        winner.textContent = `It\'s a Tie!`;
    }

    container.appendChild(winner);

    setTimeout(webReload, 10000);
};

welcomePlayer();