DROP TABLE IF EXISTS users;
DROP TYPE IF EXISTS user_role;

CREATE TYPE user_role AS ENUM ('admin', 'teacher', 'student');

CREATE TABLE users(
id SERIAL PRIMARY KEY ,
username TEXT NOT NULL DEFAULT '',
password TEXT NOT NULL,
email TEXT NOT NULL DEFAULT '',
session_key TEXT,
user_type user_role NOT NULL DEFAULT 'student');

INSERT INTO users(id, username, password, email, session_key, user_type) VALUES

(1, 'Joseph Bean', 'frogstar21', 'frogstar21@gmail.com', '', 'admin'),
(2, 'Yenry Simon', 'YenStar', 'yenry@gmail.com', '', 'teacher'),
(3, 'Madeline Ballou', 'Madeline999', 'madeline@gmail.com', '', 'student');
