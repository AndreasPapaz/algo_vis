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
