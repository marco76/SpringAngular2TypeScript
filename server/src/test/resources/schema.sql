-- this script is executed automatically by Spring Boot
DROP TABLE ARTICLE;

CREATE MEMORY TABLE ARTICLE  (ID INT PRIMARY KEY auto_increment, TITLE VARCHAR2(100), CONTENT TEXT)