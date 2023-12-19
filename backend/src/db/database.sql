DROP TABLE IF EXISTS users;

CREATE TABLE users(
id SERIAL PRIMARY KEY ,
username TEXT NOT NULL DEFAULT '',
password TEXT NOT NULL,
email TEXT NOT NULL DEFAULT '',
session_key TEXT
);

INSERT INTO users(id, username, password, email, session_key) VALUES

(1,'Joseph Bean', 'frogstar21', 'frogstar21@gmail.com', ''),
(2,'Yenry Simon', 'YenStar', 'yenry@gmail.com', ''),
(3,'Madeline Ballou ', 'Madeline999', 'madeline@gmail.com', '');