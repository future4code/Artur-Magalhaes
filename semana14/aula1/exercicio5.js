function operacoes(num1, num2) {
    var resultado = {
        soma: num1 + num2,
        subtracao: num1 - num2,
        multiplicacao: num1 * num2,
        maior: num1 > num2 ? num1 : num2
    };
    return resultado;
}
console.log(operacoes(3, 5));
