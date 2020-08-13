# Exercicio

## 1.
a)  Uma chave que se refere a uma chave primária de outra tabela.
b)  INSERT INTO Rating 
VALUES  ("001", "Filme bom!", 8, "001"),
		("003", "Filme regular!", 7, "003"),
        ("004", "Filme muito bom!", 9, "004"),
        ("010", "Ótimo filme!", 10, "010");
c)  Não pode adicionar uma id que não existe na tabela de filmes.
d)  ALTER TABLE filme DROP COLUMN rating;
e)  Não pode deletar uma linha da tabela filme que seja referenciada em outra tabela como foreign key.

## 2.
a)  Esta tabela vai armazenar os atores que estão em cada filme. Esta representação se da pela relação dos id's de filme e ator.
b)  INSERT INTO MovieCast VALUES ("001", "002"),("001", "012"),("003", "005"),("004", "010"),("004", "011"),("004", "013");
c)  Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_artur_magalhaes`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `filme` (`id`))
d)  Não pode deletar uma linha da tabela actor que seja referenciada em outra tabela como foreign key.

## 3.
a)  Junta as duas tabela quando o id delas forem iguais.
b)  SELECT name, Rating.id, rate FROM filme
INNER JOIN Rating ON filme.id = Rating.movie_id;

## 4.
a)  SELECT name, filme.id, rate, comment FROM filme
LEFT JOIN Rating ON filme.id = Rating.movie_id;
b)  SELECT filme.id AS "ID do filme", filme.name AS "Título", actor_id AS "ID do Ator" FROM MovieCast
INNER JOIN filme 
ON movie_id = filme.id;
c)  SELECT AVG(rate), movie_id, filme.id FROM Rating
RIGHT JOIN filme ON movie_id = filme.id
GROUP BY filme.id;

## 5. 
a)  Um JOIN vai unir MovieCast com filme e o outro MovieCast com actor formando uma tabela com as tres informações.
b)  SELECT m.id, m.name, a.id, a.name FROM filme AS m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN actor a ON a.id = mc.actor_id;
c)  Um JOIN vai unir MovieCast com filme quando os id's forem iguais e o outro MovieCast com actor quando os id's também forem iguais formando uma tabela com as tres informações.
d)  

## 6.
a)  Relação de M pra N, pois um filme so pode receber vários oscars e o contrário também vale.

app.get('/movie/all', async(req: Request, res: Response) => {
    try {
        const result = await getFifteenMovies()
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

## 7.
const getSearchMovie = async(search: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM filme WHERE( name LIKE "%${search}%" OR sinopse LIKE "%${search}%" )
    `)
    return result[0];
}

app.get("/movie/search", async(req: Request, res: Response) => {
    try {
        const movie = await getSearchMovie(req.query.query as string);
        res.status(200).send({
            movie: movie,
        });
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})