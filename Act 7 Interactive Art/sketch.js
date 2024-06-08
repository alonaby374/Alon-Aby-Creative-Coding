let circles = [];
let colors = ['#f94144', '#f3722c', '#f8961e', '#f9844a', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];
let customFont;

function preload() {
  // Load the custom font
  customFont = loadFont('BlackOpsOne-Regular.ttf'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(32);
  textFont(customFont); // Set the custom font
}

function draw() {
  background(30);

  // Display text
  fill(255);
  text("Welcome to Bath Spa University", width/2, height/2);

  // Create a new circle at the mouse position when mouse is pressed
  if (mouseIsPressed) {
    let c = {
      x: mouseX,
      y: mouseY,
      size: random(10, 50),
      color: random(colors)
    };
    circles.push(c);
  }

  // Draw all circles
  for (let i = 0; i < circles.length; i++) {
    fill(circles[i].color);
    ellipse(circles[i].x, circles[i].y, circles[i].size);
  }
}

function keyPressed() {
  // Change color palette when any key is pressed
  if (keyIsPressed) {
    colors = generateRandomPalette();
  }
}

function generateRandomPalette() {
  let randomPalette = [];
  for (let i = 0; i < colors.length; i++) {
    randomPalette.push(color(random(255), random(255), random(255)));
  }
  return randomPalette;
}
