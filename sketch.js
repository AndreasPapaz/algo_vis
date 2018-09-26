let tree;

function setup() {
  // noCanvas();
  // createCanvas(600, 400);
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(51);
  tree = new Tree();
  // tree.addNode(5);
  // tree.addNode(3);
  // tree.addNode(100);
  //
  // console.log(tree);
  // tree.traverse();
  // for (var i = 0; i < 10; i++) {
  //   tree.addNode(floor(random(0,100)))
  // }
  // console.log(tree);
  // tree.traverse();
}

// function draw() {
//
// }

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};


function addTreeNode() {
  console.log(numInput);
}
