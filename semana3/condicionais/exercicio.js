//1.
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/* O código testa se o número é par pelo cálculo do módulo 2.
Se o resto da divisão por 2 é 0, então o número é par.
Se o número for par ele imprime "Passou no teste.". 
Se o número for ímpar ele imprime "Não passou no teste.".
*/

//2.
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break;// BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/*a. O código serve para mostrar o preço das frutas.
  b. O preço da fruta  Maçã  é  R$ 2.25
  c. (2*3.5)7 + (1*2.25) + (3*5) + (1*0.3) = 24,55
  d. O preço da fruta  Pêra  é  R$  5
*/

//3.
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

//console.log(mensagem)

/*Haverá uma mesagem de erro pois a variável mensagem foi declarada dentro do escopo do if.
Por ser declarada no bloco do if , apenas este trecho de código reconhece.
*/

//4.
//a.
const num1 = Number(prompt("Digite o primeiro número."))
const num2 = Number(prompt("Digite o próximo número?"))

if (num1 > num2){
    console.log(num1, num2)
} else if (num1 < num2){
    console.log(num2,num1)
} else{
    console.log(num1, num2)
}
/*5 5*/

//b.
const nume1 = Number(prompt("Digite o primeiro número."))
const nume2 = Number(prompt("Digite o próximo número?"))
const nume3 = Number(prompt("Digite o próximo número?"))

if (nume1 >= nume2){
    if(nume2 >= nume3){
        console.log(nume1, nume2, nume3)
    }else if(nume1 >= nume3){
        console.log(nume1, nume3, nume2)
    }else{
        console.log(nume3, nume1, nume2)
    }
}else if(nume2 > nume1){
        if(nume1 > nume3){
            console.log(nume2, nume1, nume3)
        }else if(nume2 > nume3){
            console.log(nume2, nume3, nume1)
        }else{
            console.log(nume3, nume2, nume1)
        }
    }
/*Imprime os números na ordem correta correta*/

//c.
const n1 = Number(prompt("Digite o primeiro número."))
const n2 = Number(prompt("Digite o próximo número?"))
if (n1 !== n2){
    const nume3 = Number(prompt("Digite o próximo número?"))
}
else{
    console.log("Os dois primeiros números devem ser diferentes.")
}


//5.
//a. https://drive.google.com/open?id=1lJwMhP01hBT3hdHggSYQRpkTN1o9NQpy
//b.
const ossos = prompt("Possui osso? s ou n")
let animal

if (ossos == "s"){
    animal = "Animal Vertebrado, "
    console.log("Animal Vertebrado")
    const pelos = prompt("Possui pelo? s ou n")
    if (pelos == "s"){
        animal += "mamífero. "
        console.log("Mamífero");
    }else{
        const penas = prompt("Possui pena? s ou n")
        if (penas == "s"){
            animal += "ave. "
            console.log("Ave");
        }else{
            const terrestre = prompt("Terrestre? s ou n")
            if (terrestre == "s"){
                const aquatico = prompt("Parte Aquática? s ou n")
                if (aquatico == "s"){
                   animal += "Anfíbio. "
                    console.log("Anfíbio");
                }else{   
                    animal += "Réptil. "
                    console.log("Réptil")
                }
            }else{
                animal += "Peixe. "
                console.log("É peixe.")
            }
        }
    }
    console.log(animal)
}else{
    console.log("Animal Invertebrado")
}