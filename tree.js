function Tree() {
  this.root = null;
}

Tree.prototype.addNode = function(n) {
  let node = new Node(n);

  if (this.root == null){
    this.root = node;
    this.root.x = width / 2;
    this.root.y = 16;
  }
  else {

    let currentNode = this.root;

    while (currentNode != null) {
      if (currentNode.value > node.value) {
        if (currentNode.left === null) {
          currentNode.left = node;
          currentNode.left.x = currentNode.x - 50;
          currentNode.left.y = currentNode.y + 20;
          currentNode = null;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = node;
          currentNode.right.x = currentNode.x + 50;
          currentNode.right.y = currentNode.y + 20;
          currentNode = null;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
}

Tree.prototype.traverse = function() {
  this.root.visit();
}

Tree.prototype.search = function(value) {
  let found = this.root.search(value);
  return found;
}
