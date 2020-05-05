function salvarTarefa(){
    const input = document.querySelector("input")
    const dia = document.querySelector("select").value
    
    const tarefa = input.value

    if(tarefa === ""){
        alert("Insira um item!!!")
    } else{
        switch(dia){
            case "dom": const divisor = document.getElementById("dom");
                        divisor.innerHTML += `<li>${tarefa}</li>`
                        break;
            case "seg": const divisorSeg = document.getElementById("seg");
                        divisorSeg.innerHTML += `<li>${tarefa}</li>`
                        break;
            case "ter": const divisorTer = document.getElementById("ter");
                        divisorTer.innerHTML += `<li>${tarefa}</li>`
                        break;
            case "qua": const divisorQua = document.getElementById("qua");
                        divisorQua.innerHTML += `<li>${tarefa}</li>`
                        break;
            case "qui": const divisorQui = document.getElementById("qui");
                        divisorQui.innerHTML += `<li>${tarefa}</li>`
                        break;
            case "sex": const divisorSex = document.getElementById("sex");
                        divisorSex.innerHTML += `<li>${tarefa}</li>`
                        break;
            case "sab": const divisorSab = document.getElementById("sab");
                        divisorSab.innerHTML += `<li>${tarefa}</li>`
                        break;
                        
        }

        input.value = ""
    }
}
