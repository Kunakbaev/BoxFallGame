let value = 0;
void setup(){
  createCanvas(600, 600);
  background(0);
}
void draw(){
  background(0);
  fill(value);
  rect(25, 25, 50, 50);
}
function touchStarted() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
