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
	paddleLeft_left   = paddleLeft_xPos + paddleWidth/2,
	paddleLeft_right  = paddleLeft_xPos - paddleWidth/2,
	paddleRight_left   = paddleRight_xPos + paddleWidth/2,
	paddleRight_right  = paddleRight_xPos - paddleWidth/2;
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
collision();
displayScore();
changeScore();
	rect(myBall_xPos,myBall_yPos,ballSize,ballSize);

	}
// ball bouncing
// see if ball hits wall barriers
function moveAndBounceWall() {

	myBall_xPos  = myBall_xPos + myBall_xVel;

	myBall_left  = myBall_xPos - ballSize/2;
	myBall_right = myBall_xPos + ballSize/2;
	if ( (myBall_right > canvasWidth) || (myBall_left < 0) ) {
    myBall_xPos = canvasWidth/2
  myBall_yPos = canvasHeight/2
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

function collision() {
	if ((myBall_bottom >= paddleLeft_top) && (myBall_top <= paddleLeft_bottom)) {
		if (myBall_left <= paddleLeft_right) {
			myBall_xVel = -myBall_xVel;
			
    	}
	}

 if ((myBall_bottom >= paddleRight_top) && (myBall_top <= paddleRight_bottom)) {
		if (myBall_right >= paddleRight_left) {
			myBall_xVel = -myBall_xVel;
			    
		}
	}
}
var scoreL
var scoreR
function displayScore() {
	fill(color(0,0,0));
	textSize(20);
	text("Score: " + scoreL, canvasWidth/5, ballSize);
	text("Score: " + scoreR, canvasWidth * 0.75, ballSize);
}
function changeScore() {
	if (myBall_right >= canvasWidth) {
		scoreL= scoreL + 1;
	}
	if (myBall_left <= 0) {
		scoreR=scoreR + 1;
	}
}





// keep the score
// reset ball in middle
// Mission Complete!
// (Extra) Sound Effects