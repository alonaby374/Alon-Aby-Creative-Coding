function setup() {
  createCanvas(500, 500);
  background(250);
}

function draw() {
  //antena
  fill(139, 0, 0);
  line(255, 95, 255, 65);
  circle(255, 65, 10);
  //body
  fill(144, 255, 131);
  rect(205, 200, 100, 100);
  //head
  fill(144, 255, 131);
  circle(255, 150, 110);
  //eyes
  fill(2, 2, 2);
  ellipse(220, 150, 30, 60);
  ellipse(255, 150, 30, 60);
  ellipse(290, 150, 30, 60);
  //feet
  fill(144, 255, 131);
  ellipse(216, 300, 70, 30);
  ellipse(288, 300, 70, 30);

  //arms
  fill(144, 255, 131);
  ellipse(205, 240, 30, 80);
  ellipse(305, 240, 30, 80);
  
  //circle
  fill(139, 0, 0);
  circle(255, 252, 40);
}
