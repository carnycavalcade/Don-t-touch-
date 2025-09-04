/*
 * @name Tickle
 * @arialabel The word changes from “tickle” to “giggle” as the user hovers over it. It shakes, changes color and size, and the background color changes too.
 * @description The word jitters, changes size and color, and also swaps to another word when hovered over.
 */

let defaultMessage = 'hi!';
let hoverMessage = 'WHAT THE FUCK'; // ← You can change this to any word you like
let currentMessage = defaultMessage;

let font,
  bounds,
  baseFontSize = 60,
  fontSize = baseFontSize,
  x,
  y,
  textColor,
  bgColor;

function preload() {
  font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont(font);
  textSize(fontSize);

  bounds = font.textBounds(currentMessage, 0, 0, fontSize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 + bounds.h / 2;

  textColor = color(0);
  bgColor = color(204);
}

function draw() {
  background(bgColor);

  fill(textColor);
  textSize(fontSize);
  text(currentMessage, x, y);

  bounds = font.textBounds(currentMessage, x, y, fontSize);

  // Check if mouse is over text
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y - bounds.h &&
    mouseY <= bounds.y
  ) {
    // Switch to hover word
    currentMessage = hoverMessage;

    // Jitter position
    x += random(-8, 8);
    y += random(-8, 8);

    // Random colors
    textColor = color(random(255), random(255), random(255));
    bgColor = color(random(255), random(255), random(255));

    // Random font size
    fontSize = baseFontSize + random(-20, 20);
  } else {
    // Reset everything
    currentMessage = defaultMessage;
    fontSize = baseFontSize;
    textColor = color(0);
    bgColor = color(204);

    // Recenter the word
    bounds = font.textBounds(currentMessage, 0, 0, fontSize);
    x = width / 2 - bounds.w / 2;
    y = height / 2 + bounds.h / 2;
  }
}
