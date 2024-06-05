function isSorted(numbers) {
    let max = Math.max(...numbers)
    let min = Math.min(...numbers)
    if (numbers[0] === min || numbers[0] === max){
        return true;
    }
    else{
        return false 
    }
}

export { isSorted };
