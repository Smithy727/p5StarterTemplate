//Global variables
const starCount = 300;
const planets = [];
const planetCount = 6;
let size = 0.3;
let velocity = 0;
const stars = [];
let blur = 0;
let randomColour;
let r;
let g;
let b;
var ufo;
var rocket;
let planet;
let posX;
let posY;
let useRocket = true;
let button;



//Global varialbles for accelerometer
let serial; //variable to hold an instance of the serialport library
let portName = 'COM4'; //fill in your serial port name here
let dataVal = 0;

let xAxis;
let yAxis;
let xPin;
let yPin;
var laser;
let laserHitX = 0;
//let x1 = planet.x
//let y1 = planet.y
let x2 = posX;
let y2 = posY;
let cursor;


function setup() {

  // setup for accelerometer 
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on ('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); //callback for connecting to the server
  serial.on('open', portOpen); //callbak fot the port opening
  serial.on('data', gotData); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClosed); // callback for port closing
  serial.list(); // list the serial ports
  
  let options = { baudrate: 9600}; // the data rate
  serial.open(portName, options);

  //
  var canvas = createCanvas(1200, 700);
  canvas.parent("p5container");

  frameRate(100);
  //noStroke();
  noCursor();
  angleMode(DEGREES);

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: random(width),
      y: random(height),
    });
  }
  for (let j = 0; j < planetCount; j++) {
    planets.push({
      x: random(width),
      y: random(height),
      radius: random(50,90),
    });
  }

}

function draw() {
  background(0);
  r = random(0, 255);
  g = random(0, 200);
  b = random(0, 25);
 
  posX = mouseX  //xAxis+550;        //position of x
  posY = mouseY  //yAxis +350;       //position of y

  planetAnimation();

  //creates button for switching vehicle
  button = createButton("Switch vehicle");
  button.position(width / 2, height + 50);
  button.mousePressed(switchVehicle);

  
  shootLaser();

  //draws the stars

  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];

    ellipse(star.x, star.y, blur, size);

    if (star.x > width + size) {
      star.x = -size;
    } else {
      star.x += velocity;
    }
    if (velocity >= 0) {
      blur = 0.5; //adds blur to the stars when speed increases
    }
    if (velocity == 9) {
      blur = 50;
    }
    if (velocity == 7) {
      blur = 20;
    }
    if (velocity == 5) {
      blur = 8;
    }
    if (velocity == 2.5) {
      blur = 1;
    }
  }// switches vehicles
  if (useRocket === true) {
    rocket();
  } else {
    ufo();
  }
}

function planetAnimation() {
  //planets
  cursor= posX, posY;
  let isHit = false;
  for (let j = 0; j < planets.length; j++) {
    let planet = planets[j];

    //////////////////////////////////////////////code for collision/////////////////////////////////////////////////////////////////////
    
  let distance = dist(posX, posY, planet.x, planet.y);
  let d = posY - planet.y;
  d = Math.abs(d); //disregards +/-
  if (distance < planet.radius) {
  fill(255,255,0)
  ellipse (posX, posY, 100)
  console.log("Collision!")
  } 
    if (d < planet.radius/2 && posX > planet.x ){
      laserHitX = planet.x;
      isHit =true;
  } 
    //planet
    stroke(0);
    fill(255);
    strokeWeight(1);
    ellipse(planet.x, planet.y, planet.radius);
    //ring
    noFill();
    strokeWeight(8);
    stroke(random(255), random(255), random(255), random(80, 100));
    ellipse(planet.x, planet.y, planet.radius+30, planet.radius/2);
    fill(255, 255, 255);
    strokeWeight(0);
    stroke(0);
    arc(planet.x, planet.y, planet.radius, planet.radius, 180, 0);
    if (planet.x > width + size) {
      planet.x = -size;
    } else {
      planet.x += velocity;
    }
  }

  if(isHit == false) {
    laserHitX = 0;
  }
}

function switchVehicle() {
  if (useRocket === true) {
    useRocket = false;
  } else {
    useRocket = true;
  }
}
function ufo() {
  //draws UFO
  //UFO legs
  fill(255);
  ellipse(posX - 7.5, posY + 13, 5, 9.5);
  ellipse(posX + 7.5, posY + 13, 5, 9.5);

  //body
  fill(48, 141, 185);
  ellipse(posX, posY + 5, 30, 20); //undercarriage
  noStroke();
  stroke(255);
  fill(255);
  ellipse(posX, posY + 3, 45, 16.5); //white ellipse
  fill(100);
  noStroke();
  ellipse(posX, posY - 1.5, 22, 5); //grey inner ellipse

  fill(252, 256, 50, 80);
  stroke(255);
  ellipse(posX, posY - 9.5, 24, 23); //cockpit glass
  stroke(1);
  fill(180);
  ellipse(posX, posY - 2, 20, 8); //grey ockpit lip
  fill(0);
  ellipse(posX, posY - 1, 17.5, 6); //black cockpit

  //body
  fill(255);
  rect(posX, posY - 2.5, 10, 4);
  triangle(
    posX - 6, //12,
    posY - 5, //10,
    posX + 6, //12,
    posY - 5, //10,
    posX,
    posY + 3 //6
  );

  noFill();
  stroke(255);
  strokeWeight(2);
  arc(posX, posY - 5, 5, 10, 190, 0); //steering
  //allien
  noStroke();
  fill(100, 255, 100);
  ellipse(posX, posY - 10, 12.5, 15); //head
  //mouth
  stroke(5, 55, 30);
  strokeWeight(1);
  fill(0);
  ellipse(posX, posY - 5, 3, 2);

  noFill();
  stroke(255);
  strokeWeight(2);
  arc(posX, posY, 5, 5, 190, 0); //steering
  noStroke();
  fill(100, 255, 100);
  ellipse(posX - 5, posY - 1, 3.5, 4); //left hand
  ellipse(posX + 5, posY - 1, 3.5, 4); //right hand

  fill(0);
  stroke(0);
  strokeWeight(2.5);
  line(posX - 3, posY - 12, posX - 2, posY - 10); //left eye
  line(posX + 3, posY - 12, posX + 2, posY - 10); //right eye

  noStroke();
  fill(255);
  ellipse(posX - 3, posY - 11.5, 1.5, 1.5); //left eye whites
  ellipse(posX - 2, posY - 9.5, 0.5, 0.75); //right eye whites smallest
  ellipse(posX + 3, posY - 11.5, 1.5, 1.5); //right eye whites
  ellipse(posX + 1.75, posY - 9.5, 0.5, 0.75); //right eye whites smallest
  //cockpit glass
  fill(252, 256, 50, 80);
  strokeWeight(1);
  stroke(255);
  ellipse(posX, posY - 10, 24, 23);
  //lights
  stroke(0);
  fill(r, g, b);
  ellipse(posX - 18, posY + 1, 3, 3);
  ellipse(posX + 18, posY + 1, 3, 3);
  ellipse(posX - 10, posY + 6, 3, 3);
  ellipse(posX + 10, posY + 6, 3, 3);
  ellipse(posX, posY + 7, 3, 3);
  stroke(255);
  strokeWeight(2);
}

function rocket() {
  //draws the rocket
  //flames
  
  let r = random(210, 255);
  let g = random(60, 130);
  let b = random(0, 40);
  flameSize = random(60, 125); //randomises the size of the flame between 60, 125
  stroke(r, g, b);
  strokeWeight(2.5);
  strokeJoin(ROUND);
  fill(r + 20, g + 100, b + 80);
  triangle(
    posX + 27.5,
    posY + 4,
    posX + 27.5,
    posY - 4,
    posX + flameSize,
    posY
  );

  //spaceship
  //blue wings and top
  //top
  noStroke();
  fill(23, 77, 158);
  triangle(
    posX - 17,
    posY - 7.5,
    posX - 17,
    posY + 7.5,
    posX - 35,
    posY - 0
  );
  //upper rear wing
  triangle(
    posX + 39.5,
    posY - 12.5,
    posX + 20,
    posY,
    posX - 35,
    posY + 0
  );
  //lower rear wing
  triangle(
    posX + 39.5,
    posY + 12.5,
    posX + 20,
    posY,
    posX - 35,
    posY + 0
  );
  triangle(posX - 5, posY - 8, posX + 40, posY, posX - 5, posY + 8);
  noStroke();
  20;
  //darker blue body
  fill(5, 58, 127);
  ellipse(posX, posY, 60, 17.5);

  rectMode(RADIUS);
  rect(posX + 14, posY, 15, 6, 5);
  rect(posX + 19, posY, 11.5, 5.5, 5);
  rect(posX + 20, posY, 10, 5.5, 1.5);
  rect(posX + 25, posY, 5.5, 5.5, 1.5);

  //windows
  strokeWeight(0.5);
  stroke(255);
  fill(235, 235, 235);

  ellipse(posX - 12.5, posY, 7.5, 7.5);
  ellipse(posX, posY, 7.5, 7.5);
  ellipse(posX + 12.5, posY, 7.5, 7.5);
}
//accelerate and decelerate background
function keyPressed() {
  if (keyCode === 49) {
    velocity = 0.8;
  } else if (keyCode === 50) {
    velocity = 2.5;
  } else if (keyCode === 51) {
    velocity = 5;
    size = 1;
  } else if (keyCode === 52) {
    velocity = 7;
  } else if (keyCode === 53) {
    velocity = 9;
  }
}

//Accelerometer functions

function gotData(){
  //console.log(serial.readLine());
  let currentString = serial.readLine();

  trim (currentString);
  if (!currentString) return;
  let dataArray = currentString.split(" ");
  xPin = Number(dataArray[1]);
  yPin = Number (dataArray[2]);
  laser = Number (dataArray[3]);
  // console.log("m");
  // console.log(dataArray[1]);
  // console.log(dataArray[2]);
  // console.log(dataArray[3]);
  

  xAxis = xPin;
  yAxis = yPin; 

}

function shootLaser(){
  if (laser == 1){
    push();
    stroke(r,g,b);
    strokeWeight(3);
    line(posX,posY,laserHitX, posY);
    pop();
    
   }
  }

function printList (portList){
  //postList is an array of serial port names
  for (var i = 0; i < portList.length; i++){
    //Display the list of the console;
    console.log(i + portList[i]);
  }


}
function serverConnected(){
  console.log('connected to server.');
}

function portOpen(){
  console.log('the serial port opened.');
}
function serialError(err) {
  console.log('Something went wrong with the serial port.' + err)
}

function portClosed(){
  console.log('The serial port closed.');
}

