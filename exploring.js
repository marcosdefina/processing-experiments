float joao = 0;
float y = 100;
up = true; 
upS = true; 

inital_coord = [300,100];

void setup() {
  size(600, 600);
  stroke(-150); // set stroke color to yellow
  y = height * 0.5;
}

void draw() { 
  if(joao == 255){
    up = false;
  }else if ( joao == 0) up = true;

  if(up)
    joao += 1;
  else
    joao -= 1;

  background(150);
  line(0, y, width, y);  
  
  if(y < 0) upS= false;
  if(y > height) upS= true;

  if(upS) strokeGoUp();
  else strokeGoDown();
} 

void strokeGoUp(){
  y = y - 1; 
}

void strokeGoDown(){
  y = y + 1; 
}

void mousePressed() {
  loop();
}
