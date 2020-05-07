let contas = []

function dadosCadastro(){
    const inputValor = document.getElementById("ipt-valor");
    const inputTipoDespesa = document.getElementById("ipt-tipo");
    const inputDescricao = document.getElementById("desc");

    //A seção de cadastro de despesa deve conter validações em todos os seus campos. 
    //Os usuários não devem ser capazes de criarem despesas sem valor, um tipo ou uma descrição.
    //Limitem-se a utilizar valores inteiros para os gastos
    const valorDespesa = inputValor.value;
    const tipoDespesa = inputTipoDespesa.value;
    const desc = inputDescricao.value;

    const despesa = {
        valor: valorDespesa,
        tipo: tipoDespesa,
        descricao: desc
    }

    contas.push(despesa);

    console.log(contas);

    inputValor.value = "";
    inputDescricao.value = "";

    
    listar();

    //2ª seção
    //Além disso, ela deve permitir que o usuário FILTRE a lista, sob os seguintes critérios: tipo de gasto; valor máximo e valor mínimo. 
    //Os três critérios devem ser levados em consideração ao mesmo tempo.
    
    //3ª seção
}


function listar(){
    const sec = document.getElementById("lista-completa");
    sec.innerHTML = `<tr><th>Valor</th><th>Tipo de Gasto</th><th>Descrição</th></tr>`
    
    contas.forEach((conta, index, array) => {
        sec.innerHTML += `<tr><td>${conta.valor}</td><td>${conta.tipo}<td>${conta.descricao}</td></tr>`
        return conta;
    });
    
}

function filtar(){
    const tipoDespesa = document.getElementById("select-tipo");
    const sec2 = document.getElementById("lista-completa");
    sec2.innerHTML = `<tr><th>Valor</th><th>Tipo de Gasto</th><th>Descrição</th></tr>`
    
    const filtroLista = contas.filter(despesa => {
        if (despesa.tipo === tipoDespesa.value){
            return true;
        }
    }).forEach((produto, index, array) => {
        sec2.innerHTML += `<tr><td>${produto.valor}</td><td>${produto.tipo}</td><td>${produto.descricao}</td></tr>`
    });
}



function exibirExtrato(){
    let soma = 0;
    const sec3 = document.getElementById("lista-extrato");
    sec3.innerHTML = `<tr><th>Valor</th><th>Tipo de Gasto</th></tr>`

    contas.forEach((conta, index, array) => {
        soma += Number(conta.valor);
        sec3.innerHTML += `<tr><td>${conta.valor}</td><td>${conta.tipo}</td></tr>`
        return conta;
    });

    console.log(soma)
    
    sec3.innerHTML += `<p>${soma}</p>`
}