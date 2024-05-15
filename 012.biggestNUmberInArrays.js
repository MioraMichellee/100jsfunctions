function getBiggestNumberInArrays(numbers1, numbers2) {
    let max1 = Math.max(...numbers1);
    let max2 = Math.max(...numbers2);
    return Math.max(max1,max2)
}

export { getBiggestNumberInArrays };