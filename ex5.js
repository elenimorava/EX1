class Node { //struktura per te peraqesuar nje peme
    constructor(value, children = []) {
      this.value = value;
      this.children = children;
    }
  }
  
  function findParentValue(root, targetValue) { //krijimi i funksionit rekursiv per gjetjen e prindrit
    if (root.value === targetValue) {
      return null; 
    }
  
    for (const child of root.children) {
      if (child.value === targetValue) {
        return root.value; 
      }
  
      const parentValue = findParentValue(child, targetValue);
      if (parentValue !== null) {
        return parentValue; 
      }
    }
  
    return null; 
  }
  

  // Krijojme nje peme shembull per te pare nese funksionon
const tree = new Node(8, [
    new Node(2, [
      new Node(4),
      new Node(6),
    ]),
    new Node(15, [
      new Node(3),
      new Node(18),
    ]),
  ]);
  
  // Find the parent value of node with value 2
  const targetValue = 6;
  const parentValue = findParentValue(tree, targetValue);
  
  console.log(parentValue); // Output: 5
  