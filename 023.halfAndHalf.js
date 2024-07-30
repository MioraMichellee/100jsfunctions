function halfAndHalf(text) {
    var midpoint = Math.floor(text.length / 2);
    return text.substring(0, midpoint).toLowerCase() + text.substring(midpoint).toUpperCase();
}

export { halfAndHalf };
