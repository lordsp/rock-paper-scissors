const a = "Piedra";
const b = "Papel";
const c = "Tijera";
let computerThink = (Math.random(0, 1));
let userChoice;

function computerPlay(computerThink) {
    if (computerThink <= 0.33) {
        computerChoice = a;
    } else if (computerThink > 0.33 && computerThink <= 0.66) {
        computerChoice = b;
    } else {computerChoice = c;}
    }

// Comparar userChoice y computerChoice
function playRound(userChoice, computerChoice){
if (userChoice == a && computerChoice == b) {
    console.log("Perdiste por bobi! Papel le gana a Piedra")
}
else if (userChoice == a && computerChoice == c){
    console.log("Ganaste mi rey! Piedra le gana a Tijera")
}
else if (userChoice == b && computerChoice == a){
    console.log("Ganaste mi rey! Papel le gana a Piedra")
}
else if (userChoice == b && computerChoice == c){
    console.log("Perdiste por bobi! Tijera le gana a Papel")
}
else if (userChoice == c && computerChoice == a){
    console.log("Perdiste por bobi! Piedra le gana a Tijera")
}
else if (userChoice == c && computerChoice == b){
    console.log("Ganaste mi rey! Tijera le gana a Papel")
}
else {console.log("Empataste contra una PC como todo un Bobi!")}
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Por Favor elige 1 para [PIEDRA], 2 para [PAPEL] y 3 para [TIJERA]\n', function (answer) {
    if (answer == 1)
    {
        userChoice = a;
    }
    else if (answer == 2)
    {
        userChoice = b;
    }
    else if (answer == 3)
    {
        userChoice = c;
    }
    else {console.log("Sos un bobi, te dije que eligas 1, 2 o 3... pelotudo!")}
    rl.close();
    computerPlay(computerThink);
    console.log(userChoice);
    console.log(computerChoice);
    playRound(userChoice,computerChoice);
});


//console.log(computerThink)
//computerPlay(computerThink)
//console.log(`La computadora eligió: ${computerChoice}`)
//console.log("El usuario eligió: "+userChoice)
//playRound(userChoice,computerChoice)
