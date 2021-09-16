DROP TABLE if EXISTS users

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY_KEY,
    name varchar(250) NOT NULL,
    password varchar(250) NOT NULL,
    dateCreated DATE NOT NULL,
    dateUpdated DATE NOT NULL
);