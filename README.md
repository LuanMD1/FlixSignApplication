**O projeto consiste em executar um CRUD onde o contexto é inserir e administrar livros em uma biblioteca.**
O projeto está estruturado em 3 partes [Front-end, Back-End, Banco de Dados]

<>

**1. Para executar o Front End Abra o terminal e execute: cd .\flixsignaplication.client\**
cd .\src\   
npm run dev
https://localhost:5173/

<>

**2. Para Executar o Back-End - Executar para iniciar a compilação do BackEnd a (Pasta APIBookShelf) no Visual Studio.**

<>

**3. Acesso à Base de Dados:**

SERVIDOR: LOCALHOST 
BANCO NOME DO BANCO: FLIXSIGN
TABLE: BOOKS

Criar um Banco no SQL SERVER com o Nome FLIXSIGN
Executar a Query abaixo para criar a tabela BOOKS dentro do banco FLIXSIGN

<>
USE FLIXSIGN

CREATE TABLE book (
    BOOK_ID INT PRIMARY KEY IDENTITY(1,1),
    BOOK_NAME VARCHAR(255),
    LOCATION VARCHAR(255),
    AUTHOR VARCHAR(255),
    QUANTITY INT,
    GENRE VARCHAR(255),
    PUBLICATION VARCHAR(255),
    DATA DATE
);

<>

QUERY PARA TESTE DE INSERT NO BANCO:

INSERT INTO bookzz(BOOK_NAME, LOCATION, AUTHOR, QUANTITY, GENRE, PUBLICATION, DATA)
VALUES ('Chapeuzinho Vermelho', 'FILEIRA 1-A', 'AUTOR', 2, 'INFANTIL', GETDATE(), GETDATE());

**Caso necessário, validar a connection string no BackEnd.**
<>

