var numbers = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 
               800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 
               1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1900, 1950, 2000];

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function setup() {
  createCanvas(700, 300);
  colorMode(HSB, 360, 100, 100);
  background(0);
  noStroke();

  numbers = shuffleArray(numbers);

  for (var i = 0; i < numbers.length; i++) {
    var n = numbers[i];
    var x = map(i, 0, numbers.length, 0, width);
    var w = width / numbers.length;
    var h = map(n, 0, max(numbers), 0, height);
    var y = height - h;
    var c = map(n, 0, max(numbers), 200, 300); // hue range for colors
    var s = map(n, 0, max(numbers), 70, 100); // saturation range for vibrant colors
    fill(c, s, 100);
    rect(x, y, w, h);
    stroke(0);
    strokeWeight(1);
    rect(x, y, w, h); // borders of rectangles
  }
}
