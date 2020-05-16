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

//#####################################

/*Objetos
1.  Arrays são listas encadeadas indexadas.
    Objetos são estruturas com elementes que representam coisas do mundo real.



2.
function criaRetangulo(lado1, lado2){
    const perimetroRetangulo = 2 * (lado1 + lado2);
    const areaRetangulo = lado1 * lado2;

    const obj = {
        largura: lado1,
        altura: lado2,
        perimetro: perimetroRetangulo,
        area: areaRetangulo
    }

    return obj
}

console.log(criaRetangulo(2,4))



3.
const filme = {
    titulo: 'UM SENHOR ESTAGIÁRIO',
    ano: '2015',
    diretor: 'Nancy Meyers',
    atores: ['Robert De Niro', 'Anne Hathaway', 'Rene Russo']
}

console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`);



4.
function anonimizarPessoa(obj){
    objAnonimo = {
        ...obj,
        nome:'Anônimo'
    }
    return objAnonimo;
}

const pessoa = {
    nome: 'Artur',
    idade: '24',
    email: 'artur.marques.95@hotmail.com',
    endereco: 'Fortaleza'
}

console.log(anonimizarPessoa(pessoa))
*/

//#####################################

/*Funções de array
1.
const pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

//a)
const adultos = pessoas.filter((adulto) => {
    return adulto.idade >= 18;
});

//b)
const adolescentes = pessoas.filter((adolescente) => {
    return adolescente.idade < 20;
});

console.log(adultos);
console.log(adolescentes);



2.
const array = [1, 2, 3, 4, 5, 6]
//a)
const arrayDobrado = array.map((numero) => {
    return numero * 2;
})

//b)
const arrayTriplo = array.map((numero) => {
    return `${numero * 3}`;
})

//c)
const parOuImpar = array.map((numero) => {
    if(numero % 2 == 0){
        return `${numero} é par`;
    }
    return `${numero} é ímpar`;
});

console.log(arrayDobrado);
console.log(arrayTriplo);
console.log(parOuImpar);



3.
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

//a)
const permitidos = pessoas.filter((pessoa) => {
    return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60;
});

//b)
const naoPermitidos = pessoas.filter((pessoa) => {
    return pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60;
});

console.log(permitidos);
console.log(naoPermitidos);



4.
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
];
const emailsCancelados = []
const emailNaoCancelados = []

const naoCancelada = consultas.filter((pessoa) => {
    return pessoa.cancelada === false;
});

const cancelada = consultas.filter((pessoa) => {
    return pessoa.cancelada === true;
});

naoCancelada.forEach(pessoa => {
    if (pessoa.genero === "masculino"){
        genero = 'Sr.';
        lembrar = 'lembrá-lo';
    }else{
        genero = 'Sra.';
        lembrar = 'lembrá-la';
    }
    emailNaoCancelados.push(`Olá, ${genero} ${pessoa.nome}. Estamos enviando esta mensagem para ${lembrar} da sua consulta no dia ${pessoa.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
});

console.log(emailNaoCancelados);

cancelada.forEach((pessoa) => {
    if (pessoa.genero === "masculino"){
        genero = 'Sr.';
        lembrar = 'lembrá-lo';
    }else{
        genero = 'Sra.';
        lembrar = 'lembrá-la';
    }
    emailsCancelados.push(`Olá, ${genero} ${pessoa.nome}. Infelizmente, sua consulta marcada para o dia ${pessoa.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`);
});

console.log(emailsCancelados);



5.
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]


contas.forEach((cliente) => {
    const soma = cliente.compras.reduce((a, b) => a + b, 0);
    cliente.saldoTotal -= soma;
})

console.log(contas);
*/