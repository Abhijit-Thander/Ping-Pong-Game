document.addEventListener("DOMContentLoaded", () => {
  let table = document.getElementById("ping-pong-table");
  let ball = document.getElementById("ball");
  let paddle = document.getElementById("paddle"); //targeting the  paddle element

  let ballX = 12; //coordinate of the top of the ball
  let ballY = 12; //coordinate of the left of the ball

  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  let dx = 2; //displacement factor on x direction
  let dy = 2; //displacement factor on y direction

  setInterval(() => {
    ballX += dx;
    ballY += dy;

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    //collision of ball and paddle
    /*  
    * ballX < paddle.offsetLeft + paddle.offsetWidth ->  if left of ball is less than right of the paddle
    * ballY > paddle.offsetTop -> if top of the ball is greater than top of the paddle
    * ballY - ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight -> if bottom of the ball is less than bottom of the paddle
    
    */
    if (
      ballX < paddle.offsetLeft + paddle.offsetWidth &&
      ballY > paddle.offsetTop &&
      ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight
    ) {
      dx *= -1;
    }

    if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 10) dx *= -1; //change x direction
    if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1; //change y direction
  }, 3);

  let paddleY = 0;
  let dPy = 10; //disp[lacement for paddle in Y-direction]
  document.addEventListener("keydown", (event) => {
    event.preventDefault(); // prevents the  execution of the default event behaviour
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

  document.addEventListener("mousemove", (event) => {
    let mouseDestanceTop = event.clientY; //this is the distance of the mouse pint from top of the screen
    let distanceOfTableFormTop = table.offsetTop;
    let mousePointControl =
      mouseDestanceTop - distanceOfTableFormTop - paddle.offsetHeight / 2;

    paddleY = mousePointControl;
    if (paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight)
      return; // if bottom of the paddle touches bottom of the table just return

    paddle.style.top = `${paddleY}px`;
  });
});
