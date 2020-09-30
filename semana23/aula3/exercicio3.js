function arrayElements(array){
    if(array.length > 0){
      console.log(array[array.length - 1])
      array = array.slice(0, array.length-1)
      arrayElements(array)
    }
}
  
console.log(arrayElements([1,2,3]))