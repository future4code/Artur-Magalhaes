const missingNumber = (array) => {
    let sumNumber1 = 0
    let sumNumber2 = 0
    for (let i of array){
        sumNumber1 += i;
    }

    for (let i=1; i <= array.length+1; i++){
        sumNumber2 += i
    }

    return sumNumber2 - sumNumber1
}

console.log(missingNumber([1,2,3,4,5,6,8]))

module.exports = missingNumber;