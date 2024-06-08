var screen = 0;
var y = -20;
var x = 200;
var speed = 2;
var score = 0;
var lives = 3;
var difficultyIncreaseInterval = 1000;
var lastDifficultyIncrease = 0;
var bgHue = 0;
var bgSpeed = 0.5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (screen == 0) {
    startScreen();
  } else if (screen == 1) {
    gameOn();
  } else if (screen == 2) {
    endScreen();
  }
}

function startScreen() {
  background((bgHue + 180) % 255, 50, 50); // Dark red background
  bgHue += bgSpeed;

  fill(255);
  textAlign(CENTER);
  text('WELCOME TO MY CATCHING GAME', width / 2, height / 2);
  text('click to start', width / 2, height / 2 + 20);
  reset();
}

function gameOn() {
  background((bgHue + 120) % 255, 50, 50); // Dark green background
  bgHue += bgSpeed;

  text("score = " + score, 30, 20);
  text("lives = " + lives, 30, 40);
  ellipse(x, y, 20, 20);

  fill(255, 204, 0); // Yellow paddle
  rectMode(CENTER);
  rect(mouseX, height - 10, 50, 30);

  y += speed;
  if (y > height) {
    lives--;
    if (lives <= 0) {
      screen = 2;
    } else {
      reset();
    }
  }
  if (y > height - 10 && x > mouseX - 20 && x < mouseX + 20) {
    y = -20;
    speed += 0.5;
    score += 1;
    if (score - lastDifficultyIncrease >= difficultyIncreaseInterval) {
      speed += 0.5;
      lastDifficultyIncrease = score;
    }
  }
  if (y == -20) {
    pickRandom();
  }
}

function pickRandom() {
  x = random(20, width - 20);
}

function endScreen() {
  background(30, (bgHue + 60) % 255, 50); // Dark blue background
  bgHue += bgSpeed;

  fill(255);
  textAlign(CENTER);
  text('GAME OVER', width / 2, height / 2);
  text("SCORE = " + score, width / 2, height / 2 + 20);
  text('click to play again', width / 2, height / 2 + 40);
}

function mousePressed() {
  if (screen == 0) {
    screen = 1;
  } else if (screen == 2) {
    screen = 0;
  }
}

function reset() {
  score = 0;
  speed = 2;
  y = -20;
}
