function game() {
    welcome();
    playername();
}
function welcome() {
    alert("Welcome Player!");
}
function playername() {
    let name = prompt("Can you tell me your name?", "");
    alert(`Hello ${name}!`);
    greetings(name);
}
function greetings(name) {
    let desicion = confirm("Are you feeling bored?");
    if (desicion) {
        alert("So let's play a game!");
        let play = confirm("You ready?");
        if (play) {
            playgame(name);
        }
        else {
            alert("Ok, then! We can play some another time!");
        }
    }
    else {
        alert("Seems like you are having a nice time, Enjoy!");
    }
}
function playgame(name) {
    let n = name;
    alert(`We are going to play Rock-Paper-Scissors ${n}!`);
    alert("I hope you are excited!");
    alert("Let's Start!");
}

game();