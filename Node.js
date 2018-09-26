function Node(label, x, y, level) {
  this.value = label;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
  this.level = level
}

// Node.prototype.visit = function() {
//   // Left to right visit
//   if (this.left != null) {
//       this.left.visit();
//   } else {
//       console.log(this.value);
//       fill(255);
//       noStroke();
//       text(this.value, this.x, this.y);
//   }
//   if (this.right != null) {
//       this.right.visit();
//   } else {
//     console.log(this.value);
//     fill(255);
//     noStroke();
//     text(this.value, this.x, this.y);
//   }
// }
Node.prototype.visit = function(parent) {
  if (this.left != null) {
    this.left.visit(this);
  }
  console.log(this.value);
  fill(255);
  noStroke();
  textAlign(CENTER);
  text(this.value, this.x, this.y);
  stroke(255);
  noFill();
  ellipse(this.x, this.y, 35, 35);
  line(parent.x, parent.y, this.x, this.y);
  // noFill();
  if (this.right != null) {
    this.right.visit(this);
  }
}


Node.prototype.search = function(val) {
  if (val === this.value) {
    return this;
  }
  else if (val <= this.value && this.left != null) {
    return this.left.search(val);
  }
  else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  else {
    return null
  }
}
