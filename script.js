const ball = document.getElementById('ball');
const paddleLeft = document.getElementById('paddleLeft');
const paddleRight = document.getElementById('paddleRight');

let ballX = 50;
let ballY = 50;
let ballSpeedX = 1;
let ballSpeedY = 1;

function update() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY > window.innerHeight - 20 || ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballX > window.innerWidth - 20 || ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballX <= 30 && ballY >= parseInt(paddleLeft.style.top) && ballY <= parseInt(paddleLeft.style.top) + 100) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballX >= window.innerWidth - 50 && ballY >= parseInt(paddleRight.style.top) && ballY <= parseInt(paddleRight.style.top) + 100) {
        ballSpeedX = -ballSpeedX;
    }

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}

function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();
