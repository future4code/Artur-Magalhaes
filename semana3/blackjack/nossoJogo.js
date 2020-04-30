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

 alert("Bem vindo ao jogo de Blackjack")
 let inicio = confirm("Quer iniciar uma nova rodada?")
 
 if (inicio == true){
   let usuario = []
   let computador = []
   let soma_usuario = 0
   let soma_computador = 0

   for(i=0; i<2; i++){
      usuario.push(comprarCarta())
      soma_usuario += usuario[i].valor
      computador.push(comprarCarta())
      soma_computador += computador[i].valor
   }

   console.log(`Usuário - cartas: ${usuario[0].texto} ${usuario[1].texto} - pontuação ${soma_usuario}`)
   console.log(`Computador - cartas: ${computador[0].texto} ${computador[1].texto} - pontuação ${soma_computador}`)
   
   if (soma_usuario === soma_computador){
      console.log("Empate!!")
   }else if(soma_usuario > soma_computador){
      console.log("O usuário ganhou!!")
   }else{
      console.log("O computador ganhou!!")
   }

 }else{
   console.log("O jogo acabou!")
 }
 
 */