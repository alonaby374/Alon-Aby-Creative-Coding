var rows = 20;
var cols = 20;
var distanceX = 30;
var distanceY = 30;

var palette = ["#2C3E50", "#E74C3C", "#3498DB"]; // Darker color palette

function setup() {
  createCanvas(600, 600);
  // You can call the function to automatically trigger one random 
  mousePressed();
}

function mousePressed() {
  background(255); // Change background to white
  
  rectMode(CENTER);
  noStroke();
  colorMode(HSB);

  for (var r = 1; r < rows; r++) {
    for (var c = 1; c < cols; c++) {

      var randomColor = random(palette);
      fill(randomColor);

      var size = random(20, 40); // Change size range
      
      // Randomize a number between 0 and 3
      var pattern = floor(random(0, 4));

      // Choose different patterns based on the random number
      if (pattern == 0) {
        // Pattern 1: Ellipse
        ellipse(c * distanceX, r * distanceY, size, size);
      } else if (pattern == 1) {
        // Pattern 2: Rectangle
        rect(c * distanceX, r * distanceY, size, size);
      } else if (pattern == 2) {
        // Pattern 3: Triangle
        triangle(c * distanceX, r * distanceY, c * distanceX - size / 2, r * distanceY + size, c * distanceX + size / 2, r * distanceY + size);
      } else {
        // Pattern 4: Cross
        line(c * distanceX - size / 2, r * distanceY, c * distanceX + size / 2, r * distanceY);
        line(c * distanceX, r * distanceY - size / 2, c * distanceX, r * distanceY + size / 2);
      }

    }
  }
}
