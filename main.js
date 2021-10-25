let img = "";
let position;
let objectDetector;

function preload() {
  img = loadImage("dog_cat.jpg");
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.position(420, 120);

  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
  console.log("model loaded");
  position = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
}

function draw() {
  image(img, 0, 0, 640, 420);
  fill("#8B008B");
  text("Dog", 45, 75);
  noFill();
  stroke("#1E90FF");
  rect(30, 60, 450, 350);

  stroke("#FFF");
  fill("#1E90FF");
  text("Cat", 320, 120);
  noFill();
  stroke("#8B008B");
  rect(300, 90, 270, 320);
}
