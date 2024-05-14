function lastNRevert(text, n) {

    let slicedText = text.slice(-n)
    let resultText = slicedText.split("").reverse().join("");
    
    return resultText;

}

export { lastNRevert };