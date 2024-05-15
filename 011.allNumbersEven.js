function areAllNumbersEven(numbers) {
    let result = numbers.every((nb) =>{
      return nb % 2 === 0
    })
    return result;
  }
  
  export { areAllNumbersEven };
  