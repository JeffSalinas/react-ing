CREATE DATABASE Todos;
USE Todos;
CREATE TABLE Todo_dos(
    id int PRIMARY KEY AUTO_INCREMENT Not Null,
    name varchar(30) not null,
    done bool not null
);
