# Exercicio

## 1.
a)  DROP COLUMN remove uma coluna da tabela.
b)  Altera o nome do atributo gender para sex.
c)  Altera o nome do atributo gender para gender VARCHAR(255).
d)  ALTER TABLE actor CHANGE  gender gender VARCHAR(100);

## 2.
a)  UPDATE actor SET name="Bruno G.", birth_date="1980-07-03" WHERE id="004";
b)  UPDATE actor SET name="JULIANA PÃES" WHERE id="005";
    UPDATE actor SET name="Juliana Paes" WHERE id="005";
c)  UPDATE actor SET name="Moacy Franco", salary=600000, birth_date="1968-03-26", gender="male" WHERE id="005";
d)  A query não da erro, porém não altera nenhuma linha pois não existe num dado com a informação.

## 3.
a)  DELETE FROM actor WHERE name="Fernanda Montenegro";
b)  DELETE FROM actor WHERE gender="male" AND salary > 1000000;

## 4.
a)  SELECT MAX(salary) FROM actor;
b)  SELECT MIN(salary) FROM actor WHERE gender="female";
c)  SELECT COUNT(*) FROM actor WHERE gender="female";
d)  SELECT SUM(salary) FROM actor;

## 5. 
a)  SELECT COUNT(*), gender FROM actor GROUP BY gender;
    Agrupa pelo gender e mostra na tela o contador e todos os tipos, o que difere do WHERE.
b)  SELECT id, name FROM actor ORDER BY name DESC;
c)  SELECT id, name, salary FROM actor ORDER BY salary;
d)  SELECT id, name, salary FROM actor ORDER BY salary DESC LIMIT 3;
e)  SELECT AVG(salary), gender FROM actor GROUP BY gender;

## 6.
a)  ALTER TABLE filme ADD playing_limit_date DATE;
b)  ALTER TABLE filme CHANGE evaluation rating FLOAT;
c)  UPDATE filme SET playing_limit_date="2006-03-06" WHERE id = "001";
UPDATE filme SET playing_limit_date="2020-09-01" WHERE id = "003";
d)  DELETE FROM filme WHERE id = "002";
    SELECT * FROM filme WHERE id = "002";
    Retorna valores nulos por que não tem nenhum filme com esse id.

## 7.
a)  1
SELECT COUNT(*) FROM filme WHERE playing_limit_date > CURDATE() AND rating > 7.5;
b)  8,33
SELECT AVG(rating) FROM filme;
C)  1
SELECT COUNT(*) FROM filme WHERE playing_limit_date > CURDATE();
d)  0
SELECT COUNT(*) FROM filme WHERE release_date > CURDATE();
e)  10
SELECT MAX(rating) FROM filme;
f)  7
SELECT MIN(rating) FROM filme;

## 8.
a)  SELECT name FROM filme ORDER BY name ASC;
b)  SELECT name FROM filme ORDER BY name DESC LIMIT 5;
c)  SELECT name, playing_limit_date FROM filme ORDER BY playing_limit_date DESC LIMIT 3;
d)  SELECT name, rating FROM filme ORDER BY rating DESC LIMIT 3;