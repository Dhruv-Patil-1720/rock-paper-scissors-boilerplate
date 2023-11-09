let user = document.getElementById("player");
let randomImage = document.getElementById("random-image");
let footer = document.getElementById("footer")
let rock =document.getElementById('rock')
let paper =document.getElementById('paper')
let scissor =document.getElementById('scissor')
let scoreuser = 0;
let scorecomp = 0;



//function to make buttons dynamic

rock.onclick=()=>{
    UserImage('./assets/rock-hand.png');
    RandomImage();
    compareScore();
}
paper.onclick=()=>{
    UserImage('./assets/paper-hand.png');
    RandomImage();
    compareScore();
}
scissor.onclick=()=>{
    UserImage('./assets/scissors-hand.png');
    RandomImage();
    compareScore();
}

function getRandomNum(max) {
    return Math.floor(Math.random() * (max + 1));
}

const hands = ['./assets/rock-hand.png', './assets/paper-hand.png', './assets/scissors-hand.png'];



//Function for computer image
function RandomImage() {
    let randomImageSrc = getRandomNum(2);
    randomImage.innerHTML = `<img src="${hands[randomImageSrc]}" alt="Random Image">`;
}


//Function for user image
function UserImage(imageSrc) {
    let userImage = document.createElement('img');
    userImage.src = imageSrc;
    user.innerHTML = '';
    user.appendChild(userImage);
}


//Function to Compare score
function compareScore() {
    let compImageSrc = randomImage.firstElementChild.src;
    let userImageSrc = user.firstElementChild.src;

    if (scoreuser == 5 || scorecomp== 5) {
        resetGame();
    } else if (
        (userImageSrc.includes('rock') && compImageSrc.includes('scissors')) ||
        (userImageSrc.includes('paper') && compImageSrc.includes('rock')) ||
        (userImageSrc.includes('scissors') && compImageSrc.includes('paper'))
    ) {
        scoreuser++;
        updateScore();
        popup(win);
    } else {
        scorecomp++;
        updateScore();
        popup(lose);
    }
}


//Function to update score
function updateScore() {
    let userScoreDisplay = document.getElementById("user-score");
    let pcScoreDisplay = document.getElementById("computer-score");
    userScoreDisplay.innerHTML = scoreuser;
    pcScoreDisplay.innerHTML = scorecomp;
}


//Function to display popup

var win = document.getElementById("you-win")
var lose = document.getElementById("you-lose")

function popup(result) {
    if (scoreuser == 5 || scorecomp == 5) {
        result.style.display = "block";
        location.href = '#footer'
    }
}


//Function Reset Game
function resetGame() {
    if (scoreuser === 5 || scorecomp === 5) {
        window.location.reload();
    }
}


//Function to Play Again
var playAgain = document.getElementById("play-again");
playAgain.addEventListener('click', () => {
    window.location.reload();
});