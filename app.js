document.addEventListener("DOMContentLoaded", () => {
  let table = document.getElementById("ping-pong-table");
  let ball = document.getElementById("ball");

  let ballX = 10; //coordinate of the top of the ball
  let ballY = 10; //coordinate of the left of the ball

  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  let dx = 2; //displacement factor on x direction
  let dy = 2; //displacement factor on y direction

  setInterval(() => {
    ballX += dx;
    ballY += dy;

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 10) dx *= -1; //change x direction
    if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1; //change y direction
  }, 3);
});
