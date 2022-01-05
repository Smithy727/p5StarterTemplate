//Global variables
const starCount = 400;
const size = 0.5;
let velocity = 0
const stars = [];
let blur = 0


    
function setup() {
    var canvas = createCanvas(800, 400);
    canvas.parent("p5container");

    frameRate(50)
  
    noStroke();
  
   
    
    for(let i = 0; i < starCount; i ++){
        stars.push({
        x: random(width),
        y: random(height)
        })
    }


}

function draw() {
    background(0);

    
  
    //stars
    
    
    for(let i = 0; i < stars.length; i++){
      let star = stars[i];
      
      ellipse(star.x, star.y, blur, size,);
      
      if(star.x > width + size){
       star.x = -size;
      } else {
        star.x += velocity
      }
      if (velocity ==8){
          blur = 50
      }
       if (velocity==6){
          blur = 20
      }
     if (velocity ==4){
        blur = 8
     }
      if (velocity ==2){
          blur = 1
      }
     if (velocity ==0){
          blur = 0   
      }
      
}
    
    rocket()

    
    

 
    
    
	 }
    
              
function rocket(){

     //flames
   

     let r = random(210,255)
     let g = random(60,130)
     let b = random(0,40)
     flameSize= random(120,250)
     
     stroke(r,g,b)
     strokeWeight(5)
     strokeJoin(ROUND)
    
     fill(r+20,g+100,b+80)
 
     triangle (mouseX+55,mouseY+8,mouseX+55,mouseY-8,mouseX+flameSize,mouseY)
    
    //spaceship
    //blue wings and top
    noStroke()
    fill(23,77,158)
    triangle (mouseX-34, mouseY-15,mouseX-34, mouseY+15, mouseX-70, mouseY-0)
    triangle (mouseX+79, mouseY-25,mouseX+34, mouseY, mouseX-70, mouseY+0)
    triangle (mouseX+79, mouseY+25,mouseX+34, mouseY, mouseX-70, mouseY+0)
    triangle (mouseX-10, mouseY-10,mouseX+70, mouseY, mouseX-10, mouseY+10)
    noStroke()
    20
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

//accelerate and decelerate


function keyPressed(){
if(keyCode === 49){
  velocity = 0
}
else if (keyCode === 50){
    velocity = 2
}
else if (keyCode === 51){
    velocity = 4
    size =1
}
else if (keyCode === 52){
    velocity = 6 

}
else if (keyCode === 53){
    velocity = 8
    
}
}