function otmizarPalavra(palavra) {
    let array = []
    let letra = palavra[0]
    let contador = 0;
  
    for (let i of palavra){
      if(i !== letra){
        array.push({
          letra: letra,
          contador
        });
        letra = i;
        contador = 0;
      }
      contador++;
    }
  
    array.push({
      letra: letra,
      contador
     });
  
    const isArray = array.map(element => {
      return element.letra+element.contador
    }).join("")
  
    if(isArray.length >= palavra.length){
      return palavra
    } else{
      return isArray
    }
  };
  
  console.log(otmizarPalavra('aabbbcc'))