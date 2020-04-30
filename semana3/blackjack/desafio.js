/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Jogo 21")
let usuario = []
let computador = []
somaUsuario = 0
somaComputador = 0
let resposta = true


let cartasUsuario = ""
let cartasComputadores = ""
let i = 0
let carta1
let carta2

//Verifica se as duas primeiras são A's, se for recomeça o jogo
while (i < 2){
      usuario.push(comprarCarta())
      somaUsuario += usuario[i].valor
      cartasUsuario += usuario[i].texto + " "
      computador.push(comprarCarta())
      somaComputador += computador[i].valor
      cartasComputadores += computador[i].texto + " "
      alert(usuario[i].texto)
      if(i == 1 && usuario[0].texto.substring(0,1) == "A" && usuario[0].texto.substring(0,1) == usuario[1].texto.substring(0,1)){
         alert("nao pode ser " + usuario[1].texto)
         usuario.pop()
         alert(usuario[1].texto)
         i = 1
      }else{
         i++
   }
}

/* Sem verificação de 2A's no início. 
for(i=0; i<2; i++){
   usuario.push(comprarCarta())
   somaUsuario += usuario[i].valor
   cartasUsuario += usuario[i].texto + " "
   computador.push(comprarCarta())
   somaComputador += computador[i].valor
   cartasComputadores += computador[i].texto + " "
}*/


while(resposta){
   if(somaUsuario <= 21){
      resposta = confirm(
         `Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${computador[0].texto}.` +
         "\n"+
         "Deseja comprar mais uma carta?"
      )
      if (resposta == true){
         usuario.push(comprarCarta())
         j = usuario.length
         somaUsuario += usuario[j - 1].valor
         cartasUsuario += usuario[j -1].texto + " "
      }else{
         if(somaUsuario > somaComputador){
            alert(`Suas cartas são ${cartasUsuario}. Sua pontuação é ${somaUsuario}. As cartas do computador são ${cartasComputadores}. A pontuação do computador é ${somaComputador}. O usuário ganhou!`)

         }else if(somaUsuario < somaComputador){
            alert(`Suas cartas são ${cartasUsuario}. Sua pontuação é ${somaUsuario}. As cartas do computador são ${cartasComputadores}. A pontuação do computador é ${somaComputador}. O computador ganhou!`)
            
         }else{
            alert(`Suas cartas são ${cartasUsuario}. Sua pontuação é ${somaUsuario}. As cartas do computador são ${cartasComputadores}. A pontuação do computador é ${somaComputador}. Empate!`)  
         }
         resposta = false
      }

   }else{
      confirm(`Suas cartas são ${cartasUsuario}. Sua pontuação é ${somaUsuario}. As cartas do computador são ${cartasComputadores}. A pontuação do computador é ${somaComputador}. O Computador ganhou!`)
      resposta = false
   }
}