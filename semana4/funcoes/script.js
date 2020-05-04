const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {  // i=8
			for(let j = 0; j < i; j++) {    // j=1
				array.push(j)               // [0,1,0,1,2,3,0,1,2,3,4,5]
			}
	}
	return array
}

console.log(minhaFuncao(2))
/*1 a.
    array vazio.
    []
*/

console.log(minhaFuncao(5))
/*1 b.
    array = [0,1,0,1,2,3]
*/

console.log(minhaFuncao(8))
/*1 c.
    array = [0,1,0,1,2,3,0,1,2,3,4,5]
*/

let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));


/*2 a.
      0
      2
      undefined
*/

let arrayDeNumeros = [0,1,2,4];

const funcaoNumero = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcaoNumero(arrayDeNumeros, 2));
console.log(funcaoNumero(arrayDeNumeros, 1));
console.log(funcaoNumero(arrayDeNumeros, 3));

/*2 b.
      O código funcionaria pois iria buscar os números dentro do array que são iguais aos buscados.
*/

function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x;
      resultadoB *= x;
    }
  
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
  }

/*3
    Soma todos os elementos do array e armazena em uma variável e multiplica todos os elementos do array e armazena em outra variável. Depois insere essas variáveis em outro array (arrayFinal).
    operacoesEmArray()
*/

//4 a.
function anosCachorro(numero){
    return numero * 7;
}

console.log(anosCachorro(4))

//4 b.
function pessoa(nome, idade, endereco, estudante){
    let frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e `;
    if(estudante === true){
        frase += 'sou estudante.';
    }else{
        frase += 'não sou estudante.';
    }
    return frase;
}

console.log(pessoa('Artur', 24, 'Fortaleza', true))

//5.
let seculo = (ano) => {
    if(ano > 0){
        seculo = ano / 100;
        if (ano % 100 !== 0){
            seculo = parseInt(seculo + 1);
        }else{
            seculo = parseInt(seculo);
        }
        return `O ano ${ano}${seculoEmAlgorismo(seculo)}`
    }else{
        return 'Ano inválido.'
    }
}

function seculoEmAlgorismo(seculo){
    switch(seculo){
        case 1:
            return ` pertence ao século I`;
            break;
        case 2:
            return ` pertence ao século II`;
            break;
        case 3:
            return ` pertence ao século III`;
            break;
        case 4:
            return ` pertence ao século IV`;
            break;
        case 5:
            return ` pertence ao século V`;
            break;
        case 6:
            return ` pertence ao século VI`;
            break;
        case 7:
            return ` pertence ao século VII`;
            break;
        case 8:
            return ` pertence ao século VIII`;
            break;
        case 9:
            return ` pertence ao século IX`;
            break;
        case 10:
            return ` pertence ao século X`;
            break;
        case 11:
            return ` pertence ao século XI`;
            break;
        case 12:
            return ` pertence ao século XII`;
            break;
        case 13:
            return ` pertence ao século XIII`;
            break;
        case 14:
            return ` pertence ao século XIV`;
            break;
        case 15:
            return ` pertence ao século XV`;
            break;
        case 16:
            return ` pertence ao século XVI`;
            break;
        case 17:
            return ` pertence ao século XVII`;
            break;
        case 18:
            return ` pertence ao século XVIII`;
            break;
        case 19:
            return ` pertence ao século XIX`;
            break;
        case 20:
            return ` pertence ao século XX`;
            break;
        case 21:
            return ` pertence ao século XXI`;
            break;
    }
}

console.log(seculo(1))


//6.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//  a.
let tamanhoArray = function(vect){
    return vect.length;
}

console.log(tamanhoArray(array))

//  b.
let parImpar = (num) => {
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(parImpar(19))

//  c.
function quantidadeDePar(vector){
    let cont = 0
    for(let x of vector){
        if (x % 2 == 0){
            cont++;
        }
    }
    return cont;
}

console.log(quantidadeDePar(array))

//  d.
function quantidadeDeParReuso(vector){
    let cont = 0
    let resposta
    for(let x of vector){
        if(parImpar(x) == true){
            cont ++;
        }
    }
    return cont;
}

console.log(quantidadeDeParReuso(array))