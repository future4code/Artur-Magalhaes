export function checaPalindromo(frase) {
  let palavra = '';
  for (let i of frase.split(' ')) {
    palavra += i;
  }
  
  return (
    frase.split(' ').join('').toLowerCase() ===
    palavra
      .split('')
      .reverse()
      .join('')
      .toLowerCase()
  );
}
