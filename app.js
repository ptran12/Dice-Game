var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var leftDice = document.getElementById("dice1");
var rightDice = document.getElementById("dice2");

// generating the image dice link
function pickImg () {
    var diceImg = "./images/dice" + randomNumber1 + ".png";
    console.log(diceImg);
    return (diceImg);
}

leftDice.setAttribute("src", pickImg());









