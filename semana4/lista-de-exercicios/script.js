/*Interpretação de código
1. A função pega uma entrada do usuário pelo prompt, converte para tipo number, calcula valor*cotação(entrada do usuário) e retorna concatenado com a string "R$".
   
Console exibirá: 
R$(100*prompt)


2. A função investeDinheiro recebe dois argumentos (tipoDeInvestimento, valor) e dependendo do tipoDeInvestimento passado o cálculo será realizado de uma forma diferente dos outros tipos e se o valor passado não for correspondente as opções será apresentado um alert.

Console exibirá:
165
TIPO DE INVESTIMENTO INFORMADO INCORRETO!


3. O código percorre o vetor numeros e armazena valores pares no array1 e ímpares no array2.

Console exibirá:
Quantidade total de números 14
6
8


4. O código pega o maior e o menor número dentro do array.

Console exibirá:
-10
283
*/

//#####################################

/*Lógica de Programação
1.
for(i = 0; i < array.length; i++){}
for(arr of array){}
array.forEach(){}

const array = [1,2,3,4,5,6,7,8]
for(let array of array){
    console.log(array);
}


2.
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 => true
const booleano4 = !booleano3 => false
    a) true && false && true 
        false
    
    b) (true && false) || false
        false

    c) (false || true) && (false || true)
        true
    
    d) !(false && true) || !(true && true)
        true

    e) !true && !true || (!false && true && true)
        true


3. O código da um loop infinito por que não ter incremento no i.

const quantidadeDeNumerosPares = 5
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++;
}


4.
function triangulo(a, b, c) {
    if (a === b && a === c){
        return "Equilátero";
    }
    else if ((a === b) || (a == c) || (b == c)){
        return "Isóceles";
    }
    else{
        return "Escaleno";
    }
}

console.log(triangulo(2,2,2))


5.
const operacoes = (a, b) => {
    let diferenca = 0
    if(a > b){
        console.log(`O maior é ${a}`)
        diferenca = a - b
    }else{
        console.log(`O maior é ${b}`)
        diferenca = b - a
    }
    if(a % b == 0){
        console.log(`${a} é divisível por ${b}`)
    }else{
        console.log(`${a} não é divisível por ${b}`)
    }
    if(b % a == 0){
        console.log(`${b} é divisível por ${a}`)
    }else{
        console.log(`${b} não é divisível por ${a}`)
    }
    console.log(`A diferençã entre eles é ${diferenca}`)
}

operacoes(15, 30)
*/

//#####################################

/*Funções
1.
function recebeArray(array){
    array.sort();
    console.log(array[1], array[array.length - 2]);
}
const array = [7,6,5,4,3,2]
recebeArray(array)


2.
const alerta = () => {
    alert("Hello Futere4");
}

alerta()
*/
