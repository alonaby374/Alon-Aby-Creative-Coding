let img;

function preload() {
  img = loadImage("water.jpg");
}

function setup() {
  createCanvas(500, 500);
  background(255, 255, 255);
  
  // Clipping the image with text
  let cnv = createGraphics(width, height);
  cnv.fill(130, 100, 0);
  cnv.textSize(100);
  cnv.textAlign(CENTER, CENTER); // Centering the text
  cnv.text('HEY', width/2, height/2); // Centering text horizontally and vertically
  img.mask(cnv); // Clipping the image with text
  image(img, 0, 0, width, height); // Displaying the clipped image
}
