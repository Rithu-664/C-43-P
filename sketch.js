// Declaring variables
var hr,mn,sc;
var scAngle,hrAngle,mnAngle;

function setup() {
  //Creating canvas
  createCanvas(800,400);
   
  // Storing p5.js functions to get time.
  hr = hour()
  mn = minute()
  sc = second()

  // Using map func
  scAngle = map(sc,0,60,0,360)
  hrAngle = map(hr,0,24%12,0,360)
  mnAngle = map(mn,0,60,0,360)
}

function draw() {
  background(0); 
  
  //Changing the angle to degrees
  angleMode(DEGREES)

  push()
  rotate(scAngle)
  strokeWeight(7)
  stroke(255,0,0)
  translate(scAngle.x,scAngle.y)
  line(0,0,100,0)
  pop()

  push()
  rotate(mnAngle)
  strokeWeight(7)
  stroke(255,0,0)
  translate(mnAngle.x,mnAngle.y)
  line(0,0,100,0)
  pop()

  push()
  rotate(hrAngle)
  strokeWeight(7)
  stroke(255,0,0)
  translate(hrAngle.x,hrAngle.y)
  line(0,0,100,0)
  pop()

  drawSprites();
}