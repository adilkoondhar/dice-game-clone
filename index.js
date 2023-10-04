function randomInt(range) {
    return Math.floor((Math.random() * range) + 1);
}

function checkNum(num1, num2) {
    if (num1 == num2) {
        document.querySelector("h1").textContent = "Draw";
    } else if (num1 > num2) {
        document.querySelector("h1").textContent = "Player 1 Win!";
    } else {
        document.querySelector("h1").textContent = "Player 2 Win!";
    }
}

var num1 = randomInt(6), num2 = randomInt(6);

document.querySelector(".img1").setAttribute("src", "images/dice" + num1 +".png")
document.querySelector(".img2").setAttribute("src", "images/dice" + num2 +".png")
checkNum(num1, num2);