function everyNPositions(message, step) {
    let newMessage="";
    for (let i=0; i<message.length; i++){
        if(i%step === 0){
            newMessage = newMessage + message.charAt(i)
        }
    }
    return newMessage;
    
}

export { everyNPositions };
