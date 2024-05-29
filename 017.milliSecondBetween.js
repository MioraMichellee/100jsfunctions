function getMillisecondsBetween(date1, date2) { 
    var dateA = new Date(date1);
    var dateB = new Date(date2);

    return Math.abs(dateA.getTime() - dateB.getTime());
}

export { getMillisecondsBetween };