//a)
//Entradas: Array de numeros
//Saídas: Maior, menor, media

function obterEstatisticas(numeros: Array<number>) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    type estatistica = {maior: number, menor: number, media:number}

    const estatisticas: estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}


type dados = {
    numeros: number[],
    obterEstatisticas: (numeros) => {maior: number, menor: number, media:number}
}

    const numeros = [21, 18, 65, 44, 15, 18]

    console.log(obterEstatisticas (numeros))