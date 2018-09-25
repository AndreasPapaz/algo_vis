function Node(label, x, y) {
  this.value = label;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
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
Node.prototype.visit = function() {
  if (this.left != null) {
    this.left.visit();
  }
  console.log(this.value);
  fill(255);
  noStroke();
  text(this.value, this.x, this.y);
  if (this.right != null) {
    this.right.visit();
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
