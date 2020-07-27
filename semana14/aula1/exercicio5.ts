function operacoes(num1: number, num2:number) {
    type op = {
        soma: number,
        subtracao: number,
        multiplicacao: number,
        maior: number,
    }

    const resultado: op = {
        soma: num1+num2,
        subtracao: num1-num2,
        multiplicacao: num1*num2,
        maior: num1 > num2 ? num1 : num2,
    }

    return resultado
}

console.log(operacoes(3,5))