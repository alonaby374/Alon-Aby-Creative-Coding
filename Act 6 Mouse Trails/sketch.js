let trails = [];

function setup() {
  createCanvas(800, 600);
  frameRate(60);
}

function draw() {
  background(0); 
  
  // Display trails
  for (let i = 0; i < trails.length; i++) {
    let trail = trails[i];
    noStroke();
    fill(trail.color);
    ellipse(trail.x, trail.y, 50);
  }
  
  // Add current mouse position to trails array
  trails.push({
    x: mouseX,
    y: mouseY,
    color: color(random(0, 255), random(0, 255), random(0, 255), 255) // Random high contrast color with full transparency
  });
  
  
}
