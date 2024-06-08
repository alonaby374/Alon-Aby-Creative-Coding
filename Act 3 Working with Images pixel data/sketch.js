var img, x, y;

function preload() {
  img = loadImage("water.jpg");
}

function setup() {
  createCanvas(640, 359);
  background(0);
  noStroke();
}

function draw() {
  background(0);
  x = mouseX;
  y = mouseY;
  // Place the image before the background to ensure it's visible
  image(img, 0, 0);
  var c = get(x, y);
  fill(c);
  ellipse(x, y, 100, 100);
}
