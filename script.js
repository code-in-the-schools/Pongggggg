var canvasWidth = 500, canvasHeight = 400;
var ballSize=20 // make ball
var myBall;
var myBall_xPos = canvasWidth/2, myBall_yPos = canvasHeight/2;
var myBall_xVel = 0, myBall_yVel = 0;
var myBall_top    = myBall_yPos - ballSize/2,



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
}// motion

  function draw() {
	background(color(r, g, b));

	moveAndBounceWall();

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

function colorChange() {
	r = random(255);
	  g = random(255);
	 b = random(255);
}

// make game paddles
// keep the score
// reset ball in middle
// Mission Complete!