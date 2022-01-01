//Global variables
var spaceShip
let numStars = 30
    sizeDiff = 0.8;
    axisLengthMin = 5;
    ratio = 0.0001
    

    

var 
   
    x = random (width),
    y = random (height),
    frameCount = 80

function setup() {
    var canvas = createCanvas(800, 200);
    canvas.parent("p5container");

    frameRate(7)
  
   
    
}

function draw() {
    background(0);

   
  
    
   

    //move 0,0 origin from corner to centre
    
   
    rocket()
	 }
    
              
    

function rocket(){

   
    
    //spaceship
    //blue wings and top
    fill(23,77,158)
    triangle (mouseX-34, mouseY-15,mouseX-34, mouseY+15, mouseX-70, mouseY-0)
    triangle (mouseX+79, mouseY-25,mouseX+34, mouseY, mouseX-70, mouseY+0)
    triangle (mouseX+79, mouseY+25,mouseX+34, mouseY, mouseX-70, mouseY+0)
    triangle (mouseX-10, mouseY-10,mouseX+70, mouseY, mouseX-10, mouseY+10)
    noStroke()
    
    //darker blue body
    fill(5,58,127)
    ellipse(mouseX, mouseY, 120,35);
 
    rectMode(RADIUS)
    rect(mouseX+28,mouseY,30,12,7)
    rect(mouseX+38,mouseY,23,11,7)
    rect(mouseX+40,mouseY,20,11,3)
    rect(mouseX+50,mouseY,11,11,3)

    //windows
    strokeWeight(0.5)
    stroke(255)
    fill(235,235,235)
    ellipse(mouseX-25, mouseY, 15,15)
    ellipse(mouseX, mouseY, 15,15)
    ellipse(mouseX+25, mouseY, 15,15)
}

