

var paint = [];
var nline = [];
function setup() {
  canvas = createCanvas(800,400);
  canvas.mousePressed(sline);

}

function draw() {
  background("lightskyblue");
  stroke("black");
  strokeWeight(1);
  text("Press the SpaceBar to clear the canvas!",40,15);

  if(mouseIsPressed){
    var draw = {
      x: mouseX,
      y: mouseY
    }
    nline.push(draw);
  }

  var color = "white";

  stroke(color);
  strokeWeight(10);
  noFill();
  for(var i = 0; i < paint.length; i++){
    var ndraw = paint[i];
    beginShape();
    for(var m = 0; m < ndraw.length; m++){
      vertex(ndraw[m].x,ndraw[m].y);
    }
    endShape();
  }
}

function sline(){
  nline = [];
  paint.push(nline);
}

function keyPressed(){
  if(keyCode === 32){
    paint = [];
  }

}