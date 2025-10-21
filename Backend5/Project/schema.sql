CREATE TABLE IF NOT EXISTS Student(
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cgpa FLOAT NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    pass VARCHAR(50) NOT NULL
);

INSERT INTO Student (id, name, cgpa, phone, email, pass) VALUES
(13238, "Abhi Raj", 8.56, "9229218007", "abhi@gmail.com","abhi@123"),
(13239, "Shalini Kumari", 8.20, "9142259247","shalini@gmail.com", "shalini@567"),
(13235, "Aastha Ishani", 8.45, "8102147896", "aastha@fmail.com", "ishani@454");

SELECT * FROM Student;
