let tree;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(51);
  tree = new Tree();
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};
