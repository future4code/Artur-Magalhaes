function quantidadeDado(letra, array){
  let count = 0
  for(let i of array){
    if(i === letra){
      count++;
    }
  }
  return count;
}

function oneEdit(palavra, isPalavra){

  if(palavra.length > isPalavra.length + 1 || 
     palavra.length < isPalavra.length - 1){
       return false
     }
  let array = []
  let isArray = []
  let array2 = []

  if(palavra === isPalavra){
    return true;
  }

  for(let i of palavra) {
        array.push({
          letra: i,
          quantidade: quantidadeDado(i, palavra)
        });
  }

  for(let i of isPalavra) {
    array2.push({
      letra: i,
      quantidade: quantidadeDado(i, palavra)
    });
  }

  console.log(array, array2);
  return false;
}

console.log(oneEdit('arr', 'palavra'))