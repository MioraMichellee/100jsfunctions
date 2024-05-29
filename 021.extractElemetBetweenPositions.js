function extractElementsBetweenPositions(numbers, n, m) {
    let a = Math.min(n,m)
    let b = Math.max(n,m)
    let array = [];
    for (let i=a; i<=b; i++){
        array.push(numbers[i])
    }
    return array
}

export { extractElementsBetweenPositions };