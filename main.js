blue_bird = "";
gurenge = "";

function preload(){
  blue_bird = loadSound("blue_bird.mp3");
  gurenge = loadSound("gurenge.mp3");
}

function setup(){
  canvas = createCanvas(500 , 600);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();
}

function draw(){
  image(video , 0 , 0 , 500 , 600);
}