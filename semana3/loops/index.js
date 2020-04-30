/*1.
let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)

R - Soma os números de 0 a 14
R - 105
*/

//2.
/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 4
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)
*/
//a. Insere um novo item na lista.
//b. [10, 15, 25, 30]
//c. [12, 15, 18, 21, 27, 30] e [12]

//3.
//a.
/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let numeroMaior = array[0]
let numeroMenor = array[0]

for(let i = 0; i < array.length; i++) {
    if (array[i] > numeroMaior){
        numeroMaior = array[i]
    }
    if (array[i] < numeroMenor){
        numeroMenor = array[i]
    }
}

console.log(`O maior número é ${numeroMaior} e o menor é ${numeroMenor}`)
*/

//b.
/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const lista = []

for (let vet of array){
    let numero = vet/10
    lista.push(numero)
}

console.log(lista)
*/
// R - [8, 3, 13, 4, 6, 2.1, 7, 12, 9, 10.3, 11, 5.5]

//c.
/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const lista = []

for (let vet of array){
    if (vet % 2 === 0){
        lista.push(vet)
    }
}

console.log(lista)
*/
// R - [80, 30, 130, 40, 60, 70, 120, 90, 110]

//d.
/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let i=0; i<array.length; i++){
    console.log(`O elemento do índex ${i} é ${array[i]}`)
}
R - O elemento do índex 0 é 80
    O elemento do índex 1 é 30
    O elemento do índex 2 é 130
    O elemento do índex 3 é 40
    O elemento do índex 4 é 60
    O elemento do índex 5 é 21
    O elemento do índex 6 é 70
    O elemento do índex 7 é 120
    O elemento do índex 8 é 90
    O elemento do índex 9 é 103
    O elemento do índex 10 é 110
    O elemento do índex 11 é 55
*/

//DESAFIO 1
/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
0
00
000
0000
*/

//DESAFIO 2
/*
const numero = Number(prompt("Digite um número: "))
let contador = 0
let boolean = false
console.log("Vamos jogar!")

while(boolean == false){
    let chute = Number(prompt("Chute um número: "))
    contador++
    if (chute == numero){
        console.log("Acertou!!")
        console.log(`O número de tentativas foi: ${contador}!!`)
        boolean = true
    } else{
        if(chute > numero){
            console.log("Errrrrrrrou, é menor")
        }else{
            console.log("Errrrrrrrou, é maior") 
        }
        console.log(`O número chutado foi: ${chute}`)
    }
}
*/

//DESAFIO 3
/*
const numero =  Number(Math.floor((Math.random() * 100) + 1))
let contador = 0
let boolean = false
console.log("Vamos jogar!")

while(boolean == false){
    let chute = Number(prompt("Chute um número: "))
    contador++
    if (chute == numero){
        console.log("Acertou!!")
        console.log(`O número de tentativas foi: ${contador}!!`)
        boolean = true
    } else{
        if(chute > numero){
            console.log("Errrrrrrrou, é menor")
        }else{
            console.log("Errrrrrrrou, é maior") 
        }
        console.log(`O número chutado foi: ${chute}`)
    }
}
*/