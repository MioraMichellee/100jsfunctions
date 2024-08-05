function diffArrays(numbers1, numbers2) {
    const set1 = new Set(numbers1);
    const set2 = new Set(numbers2);
    
    const onlyInNumbers1 = [...set1].filter(num => !set2.has(num));
    
    const onlyInNumbers2 = [...set2].filter(num => !set1.has(num));
    const result = onlyInNumbers1.concat(onlyInNumbers2);
    
      console.log(result);
      return result;
    }
    
    export { diffArrays };