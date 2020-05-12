let contas = []

function dadosCadastro(){
    const inputValor = document.getElementById("ipt-valor");
    const inputTipoDespesa = document.getElementById("ipt-tipo");
    const inputDescricao = document.getElementById("desc");

    //A seção de cadastro de despesa deve conter validações em todos os seus campos. 
    //Os usuários não devem ser capazes de criarem despesas sem valor, um tipo ou uma descrição.
    //Limitem-se a utilizar valores inteiros para os gastos
    if (inputValor.value !== "" && inputDescricao.value !== ""){
        const valorDespesa = parseInt(inputValor.value);
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

    }else{
        alert("Digite o valor e a descrição!")
    }
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
    const valorMin = document.getElementById("ipt-valor-min").value;
    const valorMax = document.getElementById("ipt-valor-max").value;
    if(valorMin !== "" && valorMax !== "" && valorMin < valorMax){
        const tipoDespesa = document.getElementById("select-tipo");
        const sec2 = document.getElementById("lista-completa");
        sec2.innerHTML = `<tr><th>Valor</th><th>Tipo de Gasto</th><th>Descrição</th></tr>`
        
        console.log(valorMin,valorMax)
        const filtroLista = contas.filter(despesa => {
            if (despesa.tipo === tipoDespesa.value && despesa.valor > Number(valorMin) && despesa.valor < Number(valorMax)){
                return true;
            }
        }).sort((a, b) => {return b.valor - a.valor}).forEach((produto, index, array) => {
            sec2.innerHTML += `<tr><td>${produto.valor}</td><td>${produto.tipo}</td><td>${produto.descricao}</td></tr>`
        });
    }
    else{
        alert("Digite valores para Mínimo e Máximo!\nMáximo deve ser maior que o valor Mínimo!");
    }
}



function exibirExtrato(){
    const soma = contas.reduce((somador, valores) => {return somador + valores.valor}, 0);
    const sec3 = document.getElementById("lista-extrato");
    sec3.innerHTML = `<tr><th>Valor</th><th>Tipo de Gasto</th></tr>`

    contas.sort((a, b) => {return b.valor - a.valor}).forEach((conta, index, array) => {
        sec3.innerHTML += `<tr><td>${conta.valor}</td><td>${conta.tipo}</td></tr>`
    });

    sec3.innerHTML += `<p>TOTAL: ${soma}</p>`
}