-- create a simple table to test your connection
CREATE TABLE IF NOT EXISTS Employee(
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(20) NOT NULL
);

INSERT INTO Employee (id, name, email, password) VALUES 
("123", "Abhi","abhi@gmail.com","abhi@123"),
("124","Shubham","shubh@gmail.com","shubh@123"),
("125","Shubhu","shubhu@gmailcom","shubhu@123");



