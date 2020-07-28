//a)
const minhaString: string = 'Artur';

//b)
const meuNumero: number | string = 20;

//c)
type pessoa = { nome: string, idade: number, corFavorita:string }

const pessoa1: pessoa = {    
    nome: 'Artur',
    idade: 20,
    corFavorita: 'Preto'
}

//d)
const pessoa2: pessoa = {    
    nome: 'Maria',
    idade: 19,
    corFavorita: 'Rosa'
}
const pessoa3: pessoa = {    
    nome: 'João',
    idade: 30,
    corFavorita: 'Azul'
}
const pessoa4: pessoa = {    
    nome: 'Maria',
    idade: 21,
    corFavorita: 'Rosa'
}

//e)

enum coresArcoIris {
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'
}

type pessoaModificado = {nome: string, idade: number, corFavorita: coresArcoIris}

const updatePessoa: pessoaModificado = {
    nome: 'Artur',
    idade: 20,
    corFavorita: coresArcoIris.VERDE,
}
