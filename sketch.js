let cor;
let circuloX; //horizontal
let circuloY; //vertical


function setup() {
   createCanvas(500, 500);
   background(color("white"));
cor = color(random(0,9), random(0,1), random(0,9))
  
circuloX = [0,0,0];
circuloY = [random(height), random(height) ,random(height)]
}

function draw() {
    fill(cor)
  for(let contador in circuloX){
    circle(circuloX[contador], circuloY[contador], 40);
    circuloX[contador]+=random(0,4,4);
    circuloY[contador]+=random(-0,0,0);
    
    if(circuloX[contador]>=width){
       circuloX[contador]=0;
       circuloX[contador]=random(height);
    }
  }
  
if (mouseIsPressed) {
   cor = color(random(0,600), random(0,600), random(0,600));
  }
}