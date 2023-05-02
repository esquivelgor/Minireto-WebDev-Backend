CREATE DATABASE IF NOT EXISTS comments;


USE comments;

CREATE TABLE comments (
    id INT(11) NOT NULL AUTO_INCREMENT,
    user VARCHAR(255) DEFAULT NULL,
    description VARCHAR(255) DEFAULT NULL,
    currentDate DATE DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE comments;

INSERT INTO messages VALUES
    (1, "Velgor", "ChatGPT is gonna take our jobs...", "2001-09-23"),
    (2, "User494943", "I don't like web programming 'cause...", "2001-09-23"), 
    (3, "superhero3942", "I've been awake since 5am without solve this...", "2001-09-23"),
    (4, "yourbro32", "Idk what to write or...", "2001-09-23"),
    (5, "internetexplorer01", "I'll be the best browser...", "2001-09-23");
