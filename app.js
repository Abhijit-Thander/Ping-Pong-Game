document.addEventListener("DOMContentLoaded", () => {
  let table = document.getElementById("ping-pong-table");
  let ball = document.getElementById("ball");
  let paddle = document.getElementById("paddle"); //targeting the  paddle element

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

  let paddleY = 0;
  let dPy = 5; //disp[lacement for paddle in Y-direction]
  document.addEventListener("keydown", (event) => {
    if (event.keyCode == 38 && paddleY > 0) {
      paddleY += -1 * dPy;
    } else if (
      event.keyCode == 40 &&
      paddleY < table.offsetHeight - paddle.offsetHeight
    ) {
      paddleY += dPy;
    }

    paddle.style.top = `${paddleY}px`;
  });
});
