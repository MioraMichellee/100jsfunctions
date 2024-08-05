function linkedNumbersSum(node) {
    let sum = 0;
  function traverse(currentNode) {
      if (currentNode) {
          if (typeof currentNode.value === 'number') {
              sum += currentNode.value;
              console.log(sum);
          }
          for (const key in currentNode) {
              if (key !== 'value') {
                  traverse(currentNode[key]);
              }
          }
      }
  }

  traverse(node);
  return sum;
}

export { linkedNumbersSum };