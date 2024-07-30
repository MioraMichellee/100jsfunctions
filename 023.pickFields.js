function pickFields(data, fields) {
    let object = {}
    fields.forEach((element)=>{
        if(element in data){
            object[element] = data[element]
        }
        
    })
    return object
}

export { pickFields };