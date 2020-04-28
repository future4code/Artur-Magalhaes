//1.
//a. false
//b. false
//c. true
//d. false
//e. boolean

//2.
//a. array é um vetor que armazena dados indexados. É declarado como array = []
//b. array começa o index por 0.
//c. Para determinar o tamanho do array, é necessário determinar uma variável e tratar com condicionais. E para descobrir o tamanho do array => array.length
//d. I.   undefined
//   II.  null
//   III. 11
//   IV.  3  e  4
//   V.   19  e  9
//   VI.  3
//   VII. 1



let graus_fahrenheit
let graus_celsius

graus_fahrenheit = 77
kelvin = (graus_fahrenheit - 32)*5/9 + 273.15
console.log("1 a. Calcule e mostre o valor de 77°F em K: " + kelvin + "K")

graus_celsius = 80
graus_fahrenheit = (graus_celsius)*9/5 + 32
console.log("1 b. Calcule e mostre o valor de 80°C em °F: " + graus_fahrenheit + "°F")

graus_celsius = 30
graus_fahrenheit = (graus_celsius)*9/5 + 32
kelvin = (graus_fahrenheit - 32)*5/9 + 273.15
console.log("1 c. Calcule e mostre o valor de 30°C em °F e K: " + graus_fahrenheit + "°F" + " e " + kelvin + "K")


graus_celsius = prompt("Temperatura que deseja converter: ")
graus_fahrenheit = (graus_celsius)*9/5 + 32
kelvin = (graus_fahrenheit - 32)*5/9 + 273.15
console.log("1 d. " + graus_celsius + ": " + graus_fahrenheit + "°F e " + kelvin + "K")


let nome = prompt("2 1. Qual seu nome?")
console.log("Resposta: " + nome)
let idade = prompt("2 2. Qual sua idade?")
console.log("Resposta: " + idade)
let endereco = prompt("2 3. Qual seu endereço?")
console.log("Resposta: " + endereco)
let profissao = prompt("2 4. Qual sua profissão")
console.log("Resposta: " + profissao)
let hobby = prompt("2 5. O que faz na hora de lazer?")
console.log("Resposta: " + hobby)


const kwh = 0.05
let consumo_kwh = 280
let valor = consumo_kwh * kwh
console.log("3 a. " + valor)
let descontado = valor * 0.85
console.log("3 b. " + descontado)