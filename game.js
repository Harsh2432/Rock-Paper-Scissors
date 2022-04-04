function game() {
    function welcome() {
        alert("Welcome Player!");
    }
    function playername() {
        let name = prompt("Can you tell me your name?", "");
        function greetings() {
            alert(`Hello ${name}!`);
            let desicion = confirm("Are you feeling bored?");
            if (decision) {
                alert("So let's play a game!");
                let play = confirm("You ready?");
                if (play) {
                    function playgame() {
                        alert(`We are going to play Rock-Paper-Scissors ${name}`);
                        alert("I hope you are excited!");
                        alert("Let's Start!");
                    }
                }
                else {
                    alert("Ok, then! We can play some another time!");
                }
            }
            else {
                alert("Seems like you are having a nice time, Enjoy!");
            }
        }
    }
}
game();