//a)
var minhaString = 'Artur';
//b)
var meuNumero = 20;
var pessoa1 = {
    nome: 'Artur',
    idade: 20,
    corFavorita: 'Preto'
};
//d)
var pessoa2 = {
    nome: 'Maria',
    idade: 19,
    corFavorita: 'Rosa'
};
var pessoa3 = {
    nome: 'João',
    idade: 30,
    corFavorita: 'Azul'
};
var pessoa4 = {
    nome: 'Maria',
    idade: 21,
    corFavorita: 'Rosa'
};
//e)
var coresArcoIris;
(function (coresArcoIris) {
    coresArcoIris["VERMELHO"] = "vermelho";
    coresArcoIris["LARANJA"] = "laranja";
    coresArcoIris["AMARELO"] = "amarelo";
    coresArcoIris["VERDE"] = "verde";
    coresArcoIris["AZUL"] = "azul";
    coresArcoIris["ANIL"] = "anil";
    coresArcoIris["VIOLETA"] = "violeta";
})(coresArcoIris || (coresArcoIris = {}));
var updatePessoa = {
    nome: 'Artur',
    idade: 20,
    corFavorita: coresArcoIris.VERDE
};
console.log(updatePessoa);
