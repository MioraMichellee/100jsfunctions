function addDays(initialDate, daysCount) {
    const newDate = initialDate;
    newDate.setDate(initialDate.getDate() + daysCount);
    return newDate;
}
export { addDays };
