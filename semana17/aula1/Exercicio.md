# Exercicio

## 1.
a)  Utilizar string no ID permite uma maior combinação e mais caracteres disponiveis, dificultado ataques externos e colisão nas chaves.

## 2.
a)  A constante connection recebe os dados de conexão com o banco de dados e a função createUser insere um usuário no banco de dados.
b) CREATE TABLE Users (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

d) const user = new CreateUser()
user.createUsers("002", "Artur2", "arturmm2", "123456","artur2@gmail.com");

## 3.
a)  process.env.JWT_KEY pode chegar como string ou undefined mas se for undefined gera erro e usando as string transforma em string.

## 7.
a)  A função verify pode retornar uma string ou um objeto e ne não colocar as any retornará string dando problema na busca do payload.id
