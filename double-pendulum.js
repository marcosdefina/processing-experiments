float joao = 0;
float y = 100;
up = true; 
 
// The statements in the setup() function 
// run once when the program begins
void setup() {
  size(600, 600);
  stroke(255);     // Set stroke color to white
  ellipse(50,50,25,25);
  y = height * 0.5;
}

// The statements in draw() are run until the 
// program is stopped. Each statement is run in 
// sequence and after the last line is read, the first 
// line is run again.
void draw() { 
  if(joao == 255){
    up = false;
  }else if ( joao == 0) up = true;

  if(up)
    joao += 1;
  else
    joao -= 1;

  background(joao);   // Set the background to black
  line(0, y, width, y);  
  
  y = y - 1; 
  if (y < 0) { 
    y = height; 
  } 
} 

void mousePressed() {
  loop();
}
