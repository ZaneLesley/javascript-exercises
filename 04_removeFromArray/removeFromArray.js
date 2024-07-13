const removeFromArray = function(array) {
    let args = Array.from(arguments)
    // Remove Array from args
    args.splice(0, 1)    
    for (let i = 0; i < args.length; i++){
        let valueIndex = array.indexOf(args[i])
        if(valueIndex !== -1)
        array.splice(valueIndex, 1)
        
        // Check to see if more of the same value exists.
        if(array.indexOf(args[i]) !== -1){
            i--
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
