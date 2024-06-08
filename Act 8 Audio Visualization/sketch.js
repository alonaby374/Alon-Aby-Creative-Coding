var mic, fft;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  noStroke();
  colorMode(HSB, 360, 100, 100); // Use HSB color mode for high contrast
}

function draw() {
  let spectrum = fft.analyze();
  let avgFrequency = spectrum.reduce((a, b) => a + b, 0) / spectrum.length;
  background(map(avgFrequency, 0, 255, 0, 360), 100, 50); // Dynamic background color with high contrast
  
  let centerX = width / 2;
  let centerY = height / 2;
  translate(centerX, centerY);
  
  let poz = [];
  
  for (let it = 0; it < spectrum.length; it++) {
    let frequency = spectrum[it];
    fill(map(frequency, 0, 255, 0, 360), 100, 100); // High contrast color based on frequency
    
    let x = cos(it * it + frequency / 100 * cos(it) + frameCount * sin(it) / 500) * centerX;
    let y = sin(it * it + frameCount * cos(it) / 700 + frequency / 100 * sin(it * 2)) * centerY;
    
    ellipse(x, y, 5 + frequency / 10, 5 + frequency / 10); // Draw circles
    poz.push([x, y, frequency]);
  }

  // Enable the line drawing with high contrast colors
  for (let lineId = 0; lineId < 50; lineId++) {
    let src = random(poz);
    let dest = random(poz);
    stroke(map(src[2], 0, 255, 0, 360), 100, 100, 150); // High contrast color based on frequency
    strokeWeight(2);
    if (src[2] > 50 && dest[2] > 50) {
      line(src[0], src[1], dest[0], dest[1]);
    }
  }
  noStroke();
}
