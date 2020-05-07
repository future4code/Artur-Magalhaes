let arrayPost = [];

function enviarPost(){

    const tits = document.getElementById("titulo");
    const auts = document.getElementById("autor");
    const texs = document.getElementById("texto");
    const imgs = document.getElementById("img");

    const tit = tits.value;
    const aut = auts.value;
    const tex = texs.value;
    const img = imgs.value;

    const post = {
        titulo: tit,
        autor: aut,
        texto: tex,
        imagem: img
    };

    arrayPost.push(post);
    console.log(arrayPost);

    const divisor = document.getElementById("div-conteudo");
divisor.innerHTML += `<div><h3>${post.titulo}</h3>` + `<small>${post.autor}</small>` + `<p>${post.texto}</p><img src="${post.imagem}"></div>` 

    tits.value = "";
    auts.value = "";
    texs.value = "";
    imgs.value = "";
}

