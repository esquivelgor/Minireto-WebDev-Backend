CREATE DATABASE IF NOT EXISTS companydb;


USE companydb;

CREATE TABLE comments (
    id INT(11) NOT NULL AUTO_INCREMENT,
    user VARCHAR(255) DEFAULT NULL,
    description VARCHAR(255) DEFAULT NULL,
    currentDate DATE DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE comments;

INSERT INTO comments VALUES
    (1, "Velgor", "ChatGPT is gonna take our jobs...", "2011-12-03"),
    (2, "Juan",  "I don't like web programming 'cause...", "2011-12-03"), 
    (3, "Juan",  "I've been awake since 5am without solve this...", "2011-12-03"),
    (4, "Juan",  "Idk what to write or...", "2011-12-03");