const reverseString = function(input) {
    let result = ''
    for(let i = 0; i < input.length; i++){
        result += input[(input.length - 1) - i]
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
