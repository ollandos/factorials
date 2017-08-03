var angle;

function setup() {
    createCanvas(400, 400);
    slider = createSlider(0, TWO_PI, PI/4, 0.005)
}

function draw() {
  angle = slider.value()
  background(51);
  stroke(225)
  translate(200, height);
  branch(50);
}

function branch(len) {
  line(0, 0, 0, 0 - len);
  translate(0, -len);
  if (len > 1) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }

  function test_branch(len) {
    line(0, 0, 0, 0 - len);
    translate(0, -len);
    if (len > 3) {
      rotate(angle);
      branch(len * 0.67);
      rotate(-angle);
      branch(len * 0.67);
    }
  }

}
