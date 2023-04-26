CREATE DATABASE IF NOT EXISTS companydb;


USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
    (1, "Juan", 1000),
    (2, "Juan", 1000), 
    (3, "Juan", 1000),
    (4, "Juan", 1000);