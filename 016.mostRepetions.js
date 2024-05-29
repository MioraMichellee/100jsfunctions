function countOccurences(string, letter){
    let occurence=0;

    for (let i=0; i<string.length; i++){
        if(string.charAt(i) === letter ){
            occurence++;
        }
    }
    return occurence;
}
function mostRepetitions(string1, string2, letter) {
    let occurence1 = countOccurences(string1,letter);
    let occurence2 = countOccurences(string2,letter);

    console.log(occurence1, occurence2)
    if(occurence1>=occurence2){
        return string1;
    }
    else{
        return string2;
    }
}

export { mostRepetitions };
