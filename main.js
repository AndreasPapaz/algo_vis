window.addEventListener('load', function() {
  console.log('on load');
  const numberVal = document.getElementById('inputNumber');
  const listNodes = [];

  document.getElementById('addNode').addEventListener('click', function() {
    let value = numberVal.value;

    listNodes.push(value);
    tree.addNode(value);
    tree.traverse();

    numberVal.value = null;
  });
})
