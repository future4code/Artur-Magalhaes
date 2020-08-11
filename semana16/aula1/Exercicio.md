# Exercicio

## 1.
a)  VARCHAR é um tipo para caracteres de tamanho variável.
    PRIMARY KEY é uma chave primária única que serve como identificador.
    NOT NULL não permite que o atributo seja nulo.
    DATE o atributo é do tipo data (YYYY-MM-DD)
b)  SHOW DATABASES - Mostra os bancos de dados no schema.
    SHOW TABLES - Mostra as tabelas do banco de dados usado.
c)  SHOW Actor - Gera um erro pois não é um palavra reservada e para ve detalhes da tabela usa o describe actor.

## 2.
a)  INSERT INTO actor(id, name, salary, birth_date, gender) values ("002", "Glória Pires", 1200000, "1963-08-23", "female");
b)  Entrada duplicada para a chave primária "002"
c)  Número de colunas não é o mesmo dos valores
INSERT INTO actor (id, name, salary, birth_date, gender) VALUES("003","Fernanda Montenegro",300000,"1929-10-19", "female");
d)  Coluna name não tem um valor default.
INSERT INTO actor (id, name, salary, birth_date, gender) VALUES("004","Bruno",400000,"1949-04-18", "male");
e)  Valor incorreto para date.
INSERT INTO actor (id, name, salary, birth_date, gender) VALUES("005", "Juliana Paes",719333.33,"1979-03-26", "female");
f) c,d,e

## 3.
a)  SELECT * FROM actor WHERE gender = "female";
b)  SELECT salary FROM actor WHERE name = "Tony Ramos";
c)  Retorna valores null pois não tem nenhuma célula com esse valor armazenado invalid.
d)  SELECT id, name, salary FROM actor WHERE salary < 500000;
e)  não exist coluna chamada nome.
SELECT id, name from actor WHERE id = "002";

## 4.
a)  A% - valores que começam com A e o resto da palavra pode ser qualqer coisa.
    J% - valores que começam com J e o resto da palavra pode ser qualqer coisa.
    AND - união das condições.
b)  SELECT * from actor WHERE name NOT LIKE "A%" AND salary > 350000;
c)  SELECT * from actor WHERE name LIKE "%G%" OR name LIKE "%g";
d)  SELECT * from actor WHERE name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g" AND salary BETWEEN 350000 AND 900000;

## 5. 
a)  CREATE TABLE filme(
    	id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        sinopse TEXT NOT NULL,
        release_date DATE NOT NULL,
        evaluation INT
);
Cria a tabela filme com seus atributos que não podem ser nulos.
b)  INSERT INTO filme values ("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7);
c)  INSERT INTO filme values ("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10);
d)  INSERT INTO filme values ("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);
e)  INSERT INTO filme values ("004", "Tropa de Elite", "O capitão da força especial da Polícia Militar do Rio de Janeiro treina dois recrutas novatos para que possam sucedê-lo.", "2007-10-05", 10);

## 6.
a)  SELECT id, name, evaluation FROM filme WHERE id = "004";
b)  SELECT * FROM filme WHERE name = "Doce de mãe";
c)  SELECT id, name, sinopse FROM filme WHERE evaluation = 7;

## 7.
a)  SELECT * FROM filme WHERE name LIKE "%vida%";
b)  SELECT * FROM filme WHERE name LIKE "%vida%" OR sinopse LIKE "%vida%";
C)  SELECT * FROM filme WHERE release_date < SYSDATE();
d)  SELECT * FROM filme WHERE release_date < SYSDATE() AND ( name LIKE "%vida%" OR sinopse LIKE "%vida%" ) AND evaluation > 7;