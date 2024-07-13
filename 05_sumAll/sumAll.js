const sumAll = function(min, max) {
    if(max < min){
        let temp = max
        max = min
        min = temp
    }

    if (!(Number.isInteger(max) && Number.isInteger(min) && max > 0 && min > 0)){
        return 'ERROR'
    }
    
    let sum = 0
    for(let i = min; i <= max; i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
