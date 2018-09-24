function Node(label) {
  this.value = label;
  this.left = null;
  this.right = null;
}

Node.prototype.visit = function() {
  // Left to right visit
  if (this.left != null) {
      this.left.visit();
  } else {
      console.log(this.value);
  }
  if (this.right != null) {
      this.right.visit();
  } else {
    console.log(this.value);
  }
}
