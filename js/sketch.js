//Global variables
const starCount = 300;
const planets = [];
const planetCount = 2;
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

function setup() {
  var canvas = createCanvas(680, 320);
  //canvas.parent("p5container");
  

  frameRate(100);

  noStroke();
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
    });
  }
}
function draw() {
  background(0);
  r = random(0, 255);
  g = random(0, 200);
  b = random(0, 25);

  posX=height/2
  posY=width/2


  

  //stars

  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];

    ellipse(star.x, star.y, blur, size);

    if (star.x > width + size) {
      star.x = -size;
    } else {
      star.x += velocity;
    }
    if (velocity >= 0) {
      blur = 0;
    }
    if (velocity == 8) {
      blur = 50;
    }
    if (velocity == 6) {
      blur = 20;
    }
    if (velocity == 4) {
      blur = 8;
    }
    if (velocity == 2) {
      blur = 1;
    }
  }
  
  
 
planetAnimation()
translate(mouseX, mouseY);
  scale(0.5);
  ufo()
  rocket();
  
}

function ufo() {
  //draws UFO
  //UFO legs
  
  fill(255);
  ellipse(posX - 15, posY + 25, 10, 19);
  ellipse(posX + 15, posY + 25, 10, 19);

  //body
  fill(48, 141, 185);
  ellipse(posX, posY + 10, 60, 40); //undercarriage
  noStroke();
  stroke(255);
  fill(255);
  ellipse(posX, posY + 3, 90, 33); //white ellipse
  fill(100);
  noStroke();
  ellipse(posX, posY - 3, 88, 20); //grey inner ellipse

  fill(252, 256, 50, 80);
  stroke(255);
  ellipse(posX, posY - 17, 48, 46); //cockpit glass
  stroke(1);
  fill(180);
  ellipse(posX, posY - 2, 40, 16); //grey ockpit lip
  fill(0);
  ellipse(posX, posY - 1, 35, 12); //black cockpit

  //body
  fill(255);
  rect(posX - 10, posY - 5, 20, 8);
  triangle(
    posX - 12,
    posY - 10,
    posX + 12,
    posY - 10,
    posX,
    posY + 6
  );

  noFill();
  stroke(255);
  strokeWeight(2);
  arc(posX, posY - 10, 20, 20, 190, 0); //steering
  //allien
  noStroke();
  fill(100, 255, 100);
  ellipse(posX, posY - 20, 25, 30); //head
  //mouth
  stroke(5, 55, 30);
  strokeWeight(2);
  fill(0);
  ellipse(posX, posY - 10, 5, 8);

  noFill();
  stroke(255);
  strokeWeight(2);
  arc(posX, posY, 20, 20, 190, 0); //steering
  noStroke();
  fill(100, 255, 100);
  ellipse(posX - 10, posY - 2, 7, 8); //left hand
  ellipse(posX + 10, posY - 2, 7, 8); //right hand

  fill(0);
  stroke(0);
  strokeWeight(6);
  line(posX - 6, posY - 23, posX - 5, posY - 20); //left eye
  line(posX + 6, posY - 23, posX + 5, posY - 20); //right eye

  noStroke();
  fill(255);
  ellipse(posX - 6, posY - 23, 3, 3); //left eye whites
  ellipse(posX - 3.5, posY - 19, 1, 1.5); //right eye whites smallest
  ellipse(posX + 6, posY - 23, 3, 3); //right eye whites
  ellipse(posX + 3.5, posY - 19, 1, 1.5); //right eye whites smallest
  //cockpit glass
  fill(252, 256, 50, 80);
  strokeWeight(1);
  stroke(255);
  ellipse(posX, posY - 17, 48, 46);
  //lights
  stroke(0);
  fill(r, g, b);
  ellipse(posX - 40, posY + 6, 6, 6);
  ellipse(posX + 40, posY + 6, 6, 6);
  ellipse(posX - 20, posY + 12.5, 6, 6);
  ellipse(posX + 20, posY + 12.5, 6, 6);
  ellipse(posX, posY + 14, 6, 6);
}

function rocket() {
  //draws the rocket
  //flames
  let r = random(210, 255);
  let g = random(60, 130);
  let b = random(0, 40);
  flameSize = random(120, 250);
  stroke(r, g, b);
  strokeWeight(5);
  strokeJoin(ROUND);
  fill(r + 20, g + 100, b + 80);
  triangle(
    mouseX + 55,
    mouseY + 8,
    mouseX + 55,
    mouseY - 8,
    mouseX + flameSize,
    mouseY
  );

  //spaceship
  //blue wings and top
  noStroke();
  fill(23, 77, 158);
  triangle(
    mouseX - 34,
    mouseY - 15,
    mouseX - 34,
    mouseY + 15,
    mouseX - 70,
    mouseY - 0
  );
  triangle(
    mouseX + 79,
    mouseY - 25,
    mouseX + 34,
    mouseY,
    mouseX - 70,
    mouseY + 0
  );
  triangle(
    mouseX + 79,
    mouseY + 25,
    mouseX + 34,
    mouseY,
    mouseX - 70,
    mouseY + 0
  );
  triangle(
    mouseX - 10,
    mouseY - 10,
    mouseX + 70,
    mouseY,
    mouseX - 10,
    mouseY + 10
  );
  noStroke();
  20;
  //darker blue body
  fill(5, 58, 127);
  ellipse(mouseX, mouseY, 120, 35);

  //rectMode(RADIUS);
  rect(mouseX + 28, mouseY, 30, 12, 7);
  rect(mouseX + 38, mouseY, 23, 11, 7);
  rect(mouseX + 40, mouseY, 20, 11, 3);
  rect(mouseX + 50, mouseY, 11, 11, 3);

  //windows
  strokeWeight(0.5);
  stroke(255);
  fill(235, 235, 235);
  ellipse(mouseX - 25, mouseY, 15, 15);
  ellipse(mouseX, mouseY, 15, 15);
  ellipse(mouseX + 25, mouseY, 15, 15);
}
//accelerate and decelerate background
function keyPressed() {
  if (keyCode === 49) {
    velocity = 0.5;
  } else if (keyCode === 50) {
    velocity = 2;
  } else if (keyCode === 51) {
    velocity = 4;
    size = 1;
  } else if (keyCode === 52) {
    velocity = 6;
  } else if (keyCode === 53) {
    velocity = 8;
  }
}
function planetAnimation(){
    //planets
  for (let j = 0; j < planets.length; j++) {
    let planet = planets[j];
    //planet
    stroke(0);
    fill(255);
    strokeWeight(1);
    ellipse(planet.x, planet.y, 52, 52);
    //ring
    noFill();
    strokeWeight(8);
    stroke(random(255), random(255), random(255), random(80, 100));
    ellipse(planet.x, planet.y, random(70, 90), random(20, 30));
    fill(255, 255, 255);
    strokeWeight(0);
    stroke(0);
    arc(planet.x, planet.y, 50, 50, 180, 0);
    if (planet.x > height + size) {
      planet.x = -size;
    } else {
      planet.x += velocity;
    }
    }
}