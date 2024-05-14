function getUserObject(firstName, lastName, age) {
    let userObject = {
        age:age,
        name:firstName+" "+lastName
    }
    return userObject;
    
}

export { getUserObject };