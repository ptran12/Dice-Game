var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

var leftDice = document.getElementById("dice1");
var rightDice = document.getElementById("dice2");
var mainHeader = document.querySelector("h1");

// generating the image dice link for the left dice
function pickImgLeft () {
    var diceImg = "./images/dice" + randomNumber1 + ".png";
    console.log(diceImg);
    return (diceImg);
}

// generating the image dice link for the right dice
function pickImgRight() {
  var diceImg = "./images/dice" + randomNumber2 + ".png";
  console.log(diceImg);
  return diceImg;
}

function display () {
    if (randomNumber1 > randomNumber2) {
        mainHeader.innerHTML = "Player 1 Wins!";
    }else if (randomNumber1 < randomNumber2) {
        mainHeader.innerHTML = "Player 2 Wins!";
    }else {
        mainHeader.innerHTML = "It is a draw, refresh the page please!"
    }
}


leftDice.setAttribute("src", pickImgLeft());
rightDice.setAttribute("src", pickImgRight());
display();









