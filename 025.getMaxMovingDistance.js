function getMaxMovingDistance(budget, weight, cost) {
    let maxMovingCoeff = budget/cost
    return (maxMovingCoeff/weight)*1000;
}

export { getMaxMovingDistance };
