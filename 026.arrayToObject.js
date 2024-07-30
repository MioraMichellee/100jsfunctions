function arrayToObject(strings) {
    let object = {};

    strings.forEach((element)=>{
        console.log(element)
        object[element] = strings.indexOf(element)
    })

    return object
}

export { arrayToObject };