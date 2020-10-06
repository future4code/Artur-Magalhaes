function index(array, num) {
    for(let i in array){
        if(num === array[i]){
            return i;
        }
    }
    
    return -1;
}

console.log(index([1,2,3,4,5], 6))