function sum(num) {
    if(num > 0){
      num += sum(num-1)
    }
    return num
}
  
console.log(sum(7))