function setup() {
  createCanvas(500, 500);
  noStroke();
  rectMode(CENTER);
  l = dist(a*1.5, a*0.5, 0, 0)/sqrt(2);
  th = QUARTER_PI-atan2(1.5, 0.5);
  frameRate(50);
  // stroke(255,0,0);
}

var a = 80;
var d = 2*a;
var l, th, t;

function draw1(q) {
  fill(32);
  for (var i=0; i<4; i++) {
    push();
    rotate(HALF_PI*i);
    ellipse(l, l, d, d);
    pop();
  }
  fill(250);
  push();
  rotate(th - HALF_PI*q);
  cross();
  pop();
}

function draw2(q) {
  fill(32);
  for (var i=0; i<4; i++) {
    push();
    rotate(HALF_PI*i);
    translate(l, l);
    rotate(-HALF_PI+th*(1-q));
    arc(0, 0, d, d, 0, TWO_PI*3/4, PIE);
    pop();
  }
}

function draw3(q) {
  fill(32);
  for (var i=0; i<4; i++) {
    push();
    rotate(HALF_PI*i);
    ellipse(l, l, d, d);
    pop();
  }
  fill(250);
  push();
  rotate(HALF_PI*q);
  rect(0, 0, 2*l, 2*l);
  pop();
}

function draw4(q) {
  fill(32);
  for (var i=0; i<4; i++) {
    push();
    rotate(HALF_PI*i);
    translate(l, l);
    rotate(-HALF_PI+q*th);
    arc(0, 0, d, d, 0, TWO_PI*3/4, PIE);
    pop();
  }
}

function ease(q) {
  q = 3*q*q - 2*q*q*q;
  return 3*q*q - 2*q*q*q;
}

function cross() {
  rect(0, 0, 3*a, a);
  rect(0, 0, a, 3*a);
}

function draw() {
  t = (0.007*frameCount)%1;
  background(250);
  push();
  translate(width/2, height/2);
  if (t<.35)
    draw1(ease(map(t,0,.35,0,1)));
  else if (t<.5)
    draw2(ease(map(t,.35,.5,0,1)));
  else if (t<.85)
    draw3(ease(map(t,.5,.85,0,1)));
  else
    draw4(ease(map(t,.85,1,0,1)));
  pop();
}
