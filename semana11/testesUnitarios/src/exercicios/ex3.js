export function checaItensDuplicados(array) {
  
  if (array.length < 1){
    return false
  }
  for(let i = 0; i < array.length; i++){
    for(let j = 1; j <= array.length; j++){
      if(array[i] === array[j]){
        return true
      }
    }
    return false;
  }
}
