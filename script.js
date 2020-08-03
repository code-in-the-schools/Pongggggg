var canvasWidth = 500, canvasHeight = 425;
var ballSize=15 // make ball
var myBall;
var myBall_xPos = canvasWidth/2, myBall_yPos = canvasHeight/2;
var myBall_xVel = 5, myBall_yVel = 0;
var myBall_top    = myBall_yPos - ballSize/2;
var paddle_left, paddle_right;
var paddleWidth = 10, paddleHeight  = canvasHeight/5, paddleVel = 5,
	paddleLeft_xPos = ballSize, paddleRight_xPos = canvasWidth- ballSize,
 	 paddleLeft_yPos = canvasHeight/2, paddleRight_yPos = canvasHeight/ 2;
	paddleLeft_top    = paddleLeft_yPos - paddleHeight/2,
	paddleLeft_bottom = paddleLeft_yPos + paddleHeight/2,
	paddleRight_top    = paddleRight_yPos - paddleHeight/2,
	paddleRight_bottom = paddleRight_yPos + paddleHeight/2;

	myBall_bottom = myBall_yPos + ballSize/2,
	myBall_left   = myBall_xPos - ballSize/2,
	myBall_right  = myBall_xPos + ballSize/2;

var r = 0, g = 0, b = 0;
function setup() {
	createCanvas(canvasWidth, canvasHeight);
	rectMode(CENTER);
	myBall = rect(myBall_xPos,myBall_yPos,ballSize,ballSize);
	myBall_xVel = random(3,6);
	myBall_yVel = random(2,4);
// motion
 paddle_left=rect(50,50,paddleWidth,paddleHeight)
}

  function draw() {
	background(color(r, g, b));
rect(paddleLeft_xPos,paddleLeft_yPos, paddleWidth, paddleHeight);
	rect(paddleRight_xPos,paddleRight_yPos, paddleWidth, paddleHeight);
	// make game paddles 
  moveAndBounceWall();
movePaddles();
	rect(myBall_xPos,myBall_yPos,ballSize,ballSize);
	}
// ball bouncing
// see if ball hits wall barriers
function moveAndBounceWall() {

	myBall_xPos  = myBall_xPos + myBall_xVel;

	myBall_left  = myBall_xPos - ballSize/2;
	myBall_right = myBall_xPos + ballSize/2;
	if ( (myBall_right > canvasWidth) || (myBall_left < 0) ) {
		myBall_xVel = -myBall_xVel;
		colorChange();
	}

	myBall_yPos   = myBall_yPos + myBall_yVel;
	myBall_top    = myBall_yPos - ballSize/2;
	myBall_bottom = myBall_yPos + ballSize/2;
	if ( (myBall_bottom > canvasHeight) || (myBall_top < 0) ) {
	
  	myBall_yVel = -myBall_yVel;
		colorChange();
	}
}               
    function movePaddles(){
      	paddleLeft_top    = paddleLeft_yPos - paddleHeight/2;
	paddleLeft_bottom = paddleLeft_yPos + paddleHeight/2;
	paddleRight_top    = paddleRight_yPos - paddleHeight/2;
	paddleRight_bottom = paddleRight_yPos + paddleHeight/2;

if (keyIsDown(87) && (paddleLeft_top > 0)) {
		paddleLeft_yPos -= paddleVel;
	} else if (keyIsDown(83) && (paddleLeft_bottom < canvasHeight)) {
		paddleLeft_yPos += paddleVel;
	}
  if (keyIsDown(38) && (paddleRight_top > 0)) {
		paddleRight_yPos -= paddleVel;
	} else if (keyIsDown(40) && (paddleRight_bottom < canvasHeight)) {
		paddleRight_yPos += paddleVel;
	}
}

function colorChange() {
	r = random(300);
	  g = random(300);
	 b = random(330);
}

//function collision() {

//}


// keep the score
// reset ball in middle
// Mission Complete!
// (Extra) Sound Effects