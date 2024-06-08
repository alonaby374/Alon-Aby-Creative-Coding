var font;

function preload() { 
  font = loadFont('ShadowsIntoLight.ttf'); 
}

var points;

function setup() { 
  createCanvas(1000, 400); 
  background(0); 
  strokeWeight(2);
  points = font.textToPoints('BATH SPA UNIVERSITY', 100, 250, 100, { sampleFactor: 0.15 });
  
  // Add background stars or dots
  for (var i = 0; i < 1000; i++) { 
    var x = random(width);
    var y = random(height);
    stroke(255); // White color
    point(x, y);
  } 
  
  // Draw the text
  for (var i = 0; i < points.length; i++) { 
    var p = points[i]; 
    stroke(255, random(150, 255), random(150, 255)); // Bright and vibrant color
    point(p.x, p.y);
  } 
}
