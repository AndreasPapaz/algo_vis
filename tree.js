function Tree() {
  this.root = null;
}

Tree.prototype.addNode = function(n, mem={'level': 0}) {
  let node = new Node(n);

  if (this.root == null){
    this.root = node;
    this.root.x = width / 2;
    this.root.y = 16;
    this.root.level = mem['level']
  }
  else {

    let currentNode = this.root;

    while (currentNode != null) {
      mem['level'] += 1;
      if (currentNode.value > node.value) {
        if (currentNode.left === null) {
          currentNode.left = node;
          currentNode.left.x = currentNode.x - 50;
          currentNode.left.y = currentNode.y + (15 * mem['level'])/1.5;
          currentNode.left.level = mem['level']
          currentNode = null;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = node;
          currentNode.right.x = currentNode.x + 50;
          currentNode.right.y = currentNode.y + (15 * mem['level'])/1.5;
          currentNode.right.level = mem['level']
          currentNode = null;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
}

Tree.prototype.traverse = function() {
  this.root.visit(this.root);
}

Tree.prototype.search = function(value) {
  let found = this.root.search(value);
  return found;
}
