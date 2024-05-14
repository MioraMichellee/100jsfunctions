function getGasolineAmount(distance, consumptionPer100Km) {
    let totalDistance = distance*2;
    let consumptionKm = consumptionPer100Km/100
    return totalDistance *consumptionKm;
}

export { getGasolineAmount };