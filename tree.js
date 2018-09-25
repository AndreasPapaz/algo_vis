function Tree() {
  this.root = null;
}

Tree.prototype.addNode = function(n) {
  let node = new Node(n);

  if (this.root == null){
    this.root = node
  } else {
    let currentNode = this.root;

    while (currentNode != null) {
      if (currentNode.value > node.value) {
        if (currentNode.left === null) {
          currentNode.left = node;
          currentNode = null;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = node;
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
