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
    let count = 0;
    let array = [];
  
    if(palavra.length > isPalavra.length + 1 || 
       palavra.length < isPalavra.length - 1){
         return false
       }
    
    for(let i of isPalavra){
      console.log(palavra.indexOf(i))
      if(palavra.indexOf(i) === -1){
        count++;
      }
    }
    
    if(count >= 2){
      return false
    }
    return true
  }