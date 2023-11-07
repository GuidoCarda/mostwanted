CREATE DATABASE mostwanted;
USE mostwanted;

CREATE TABLE criminals (
  id int primary key auto_increment,
  `name` varchar(50) not null,
  nickname varchar(50),
  `description` text,
  is_under_arrest boolean not null default 0, 
  created_at timestamp not null default current_timestamp 
)

ALTER TABLE criminals ADD `description` text;

