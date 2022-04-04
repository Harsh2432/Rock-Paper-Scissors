function game() {
    welcome();
    playername();
    greetings();
}
function welcome() {
    alert("Welcome Player!");
}
function playername() {
    let name = prompt("Can you tell me your name?", "");
    alert(`Hello ${name}!`);
}
function greetings() {
    let desicion = confirm("Are you feeling bored?");
    if (desicion) {
        alert("So let's play a game!");
        let play = confirm("You ready?");
        if (play) {
            playgame();
        }
        else {
            alert("Ok, then! We can play some another time!");
        }
    }
    else {
        alert("Seems like you are having a nice time, Enjoy!");
    }
}
function playgame() {
    alert("We are going to play Rock-Paper-Scissors!");
    alert("I hope you are excited!");
    alert("Let's Start!");
}
game();