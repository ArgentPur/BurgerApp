create database burgers_db;

use burgers_db;

create table burgers( 
    id int AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
    );