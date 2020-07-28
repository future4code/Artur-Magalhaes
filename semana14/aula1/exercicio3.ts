//a)
type post = {
    autor: string,
    texto: string,
}

const posts: post[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
]

console.log(posts)

//b)
//Entradas: array de posts e autor
//Saída: array com os posts do autor

function buscarPostsPorAutor(posts: post[], autorInformado:string) {
    return posts.filter(
      (post:post) => {
        return post.autor === autorInformado
      }
    )
  }