//Global variables
const starCount = 300;
const planets = [];
const planetCount = 4;
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

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
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
    });
  }
}

function draw() {
  background(0);
  r = random(0, 255);
  g = random(0, 200);
  b = random(0, 25);

  posX = mouseX;
  posY = mouseY;
  //creates button for switching vehicle
  button = createButton("Switch vehicle");
  button.position(width / 2, height + 50);
  button.mousePressed(switchVehicle);

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
      blur = 0.5;
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
  if (useRocket === true) {
    rocket();
  } else {
    ufo();
  }

  planetAnimation();
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
  flameSize = random(60, 125);
  stroke(r, g, b);
  strokeWeight(2.5);
  strokeJoin(ROUND);
  fill(r + 20, g + 100, b + 80);
  triangle(
    mouseX + 27.5,
    mouseY + 4,
    mouseX + 27.5,
    mouseY - 4,
    mouseX + flameSize,
    mouseY
  );

  //spaceship
  //blue wings and top
  //top
  noStroke();
  fill(23, 77, 158);
  triangle(
    mouseX - 17,
    mouseY - 7.5,
    mouseX - 17,
    mouseY + 7.5,
    mouseX - 35,
    mouseY - 0
  );
  //upper rear wing
  triangle(
    mouseX + 39.5,
    mouseY - 12.5,
    mouseX + 20,
    mouseY,
    mouseX - 35,
    mouseY + 0
  );
  //lower rear wing
  triangle(
    mouseX + 39.5,
    mouseY + 12.5,
    mouseX + 20,
    mouseY,
    mouseX - 35,
    mouseY + 0
  );
  triangle(mouseX - 5, mouseY - 8, mouseX + 40, mouseY, mouseX - 5, mouseY + 8);
  noStroke();
  20;
  //darker blue body
  fill(5, 58, 127);
  ellipse(mouseX, mouseY, 60, 17.5);

  rectMode(RADIUS);
  rect(mouseX + 14, mouseY, 15, 6, 5);
  rect(mouseX + 19, mouseY, 11.5, 5.5, 5);
  rect(mouseX + 20, mouseY, 10, 5.5, 1.5);
  rect(mouseX + 25, mouseY, 5.5, 5.5, 1.5);

  //windows
  strokeWeight(0.5);
  stroke(255);
  fill(235, 235, 235);

  ellipse(mouseX - 12.5, mouseY, 7.5, 7.5);
  ellipse(mouseX, mouseY, 7.5, 7.5);
  ellipse(mouseX + 12.5, mouseY, 7.5, 7.5);
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
function planetAnimation() {
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
    if (planet.x > width + size) {
      planet.x = -size;
    } else {
      planet.x += velocity;
    }
  }
}