let carX;
let carY;

function setup() {
  createCanvas(500, 400);
  carX = (width - 200) / 2;
  carY = height - 100;
}

function draw() {
  background(130, 200, 220); // Sky blue background
  
  // the road
  fill(50);
  rect(0, height - 90, width, 90);
  
  // the car
  drawCar(carX, carY);
}

function drawCar(x, y) {
  // Car body
  fill(255, 0, 0); // Red color
  rect(x, y - 20, 200, 20);
  rect(x + 50, y - 40, 100, 40);
  
  // Car windows
  fill(0, 191, 255); // Deep sky blue color
  rect(x + 60, y - 35, 40, 25);
  rect(x + 110, y - 35, 40, 25);
  
  // Wheels
  fill(0);
  ellipse(x + 50, y, 30, 30);
  ellipse(x + 150, y, 30, 30);
}
