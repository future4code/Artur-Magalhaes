export function checaItensDuplicados(array) {
  
  /*if (array.length < 1){
    return false
  }
  for(let i = 0; i < array.length; i++){
    for(let j = 1; j <= array.length; j++){
      if(array[i] === array[j]){
        return true
      }
    }
    return false;
  }*/
  console.log(array);
  let vetor = false
  array.forEach((element,index) => {
    if(array.indexOf(index) === -1){
      console.log(array.indexOf(index))
      vetor = true;
    }
  });
  return vetor
}
