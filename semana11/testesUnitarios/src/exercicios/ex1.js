export function checaBissexto(ano) {
  const retorno = ano % 400 === 0 ? true : (ano % 4 === 0 && ano % 100 ) ? true : false;
  
  return retorno
}
