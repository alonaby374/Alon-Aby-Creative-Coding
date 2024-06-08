let img;

function preload() {
  img = loadImage("blue.jpg");
}

function setup() {
  createCanvas(700, 700);
  background(190, 220, 250);

  // Image inside shape using clip function
  let cnv7 = createGraphics(200, 200);
  cnv7.circle(100, 100, 190);
  cnv7.canvas.getContext("2d").clip();
  cnv7.image(img, 0, 0, 200, 200);
  image(cnv7, 350, 225);

  // Image inside shape using mask function
  let cnv5 = createGraphics(200, 200);
  cnv5.circle(100, 100, 190);
  cnv5.triangle(0, 0, 100, 200, 200, 0);
  let imgMasked = createImage(200, 200); // Create an image to apply the mask
  imgMasked.copy(img, 0, 0, img.width, img.height, 0, 0, 200, 200); // Copy the original image to apply the mask
  imgMasked.mask(cnv5); // Apply the mask
  image(imgMasked, 300, 25, 200, 200);

  // Rectangle inside circle / circle inside rectangle using clip function
  let f = createGraphics(width, height);
  f.strokeWeight(10);
  f.rect(25, 0, 100, 100);
  f.canvas.getContext("2d").clip();
  f.fill(190, 50, 0);
  f.circle(100, 100, 100);
  image(f, 50, 50);

  // Drawings inside of text using clip and erase functions
  // Behind the text
  let cnv4 = createGraphics(width, height);
  cnv4.rect(100, 200, 200, 200);
  cnv4.canvas.getContext("2d").clip();
  cnv4.fill(0, 200, 0);
  cnv4.circle(200, 230, 100);
  image(cnv4, 0, 0);

  // Text with watercolor effect
  let cnv3 = createGraphics(width, height);
  cnv3.fill(200, 0, 0);
  cnv3.noStroke();
  cnv3.rect(100, 200, 200, 200);
  cnv3.erase();
  cnv3.textSize(50);
  cnv3.text('hello', 130, 350);
  image(cnv3, 0, 0);

  // Watercolor effect
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i] += random(-50, 50); // Red
    pixels[i + 1] += random(-50, 50); // Green
    pixels[i + 2] += random(-50, 50); // Blue
  }
  updatePixels();
}
