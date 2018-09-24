let tree;

function setup() {
  noCanvas();
  tree = new Tree();
  tree.addNode(5);
  tree.addNode(3);
  tree.addNode(100);

  console.log(tree);
  tree.traverse();
  for (var i = 0; i < 10; i++) {
    tree.addNode(floor(random(0,100)))
  }
  console.log(tree);
  tree.traverse();
}

function draw() {
  if (mouseIsPressed) {
    fill(100);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
