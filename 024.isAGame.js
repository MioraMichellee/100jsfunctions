function isSameDay(date1, date2) {
    return date1.getDate(date1)===date2.getDate(date2) && 
    date1.getMonth(date1)===date2.getMonth(date2) &&
    date1.getYear(date1)===date2.getYear(date2)
}

export { isSameDay };
