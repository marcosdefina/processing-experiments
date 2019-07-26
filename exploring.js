RIGHT = 'RIGHT';
LEFT = 'LEFT';
TOP = 'TOP';
BOTTOM = 'BOTTOM';

up = true; 
upS = true;
position_v = [300, 300];
velocity_v = [10, 15];

void setup() {
  frameRate(60);
  size(600, 600);
  y = height * 0.5;
}

void draw() { 
  background(0); //always redraw background
    
  drawCircle(position_v);
  position_v = moveCircle(position_v, velocity_v);

  velocity_v = newDirection(velocity_v, bounderyDetection(position_v));


  if(y < 0) upS= false;
  if(y > height) upS= true;

  if(upS) strokeGoUp(10);
  else strokeGoDown(10);
}

/** This function detects the colition of the circle with the screen bonderies
  * @param { Array } x - contains the position vector
 */
void bounderyDetection(x){
  if(x[0] > width)
    return RIGHT;
  if(x[0] < 0)
    return LEFT;
  if(x[1] > height)
    return TOP;
  if(x[1] < 0)
    return BOTTOM;
  return false;
}

/** This function sums the position vector with the velocity vector 
  * @param { Array } x - contains the position vector;
  * @param { Array } v - contains the velocity vector;
 */
void moveCircle(x, v){
  x[0] += v[0];
  x[1] += v[1];
  
  return x;
}

/** This function swaps the velocity components due to the reflection on the incident angle;
  * @param { Array } v - vector containing x_velocity and y_velocity
  * @param { Type } colision - contain info about where the colition happend
 */
void newDirection(v, colision){
  if(colision === RIGHT || colision === LEFT)
      v[0] = -v[0];
  if(colision === TOP || colision === BOTTOM)
      v[1] = -v[1];
  return v;
}

void drawCircle(v) {
  stroke(255);
  strokeWeight(2);
  fill(127);
  ellipse(v[0],v[1],48,48);
}

void strokeGoUp(speed){
  y = y - speed; 
}

void strokeGoDown(speed){
  y = y + speed; 
}