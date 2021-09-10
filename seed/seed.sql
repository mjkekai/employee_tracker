DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(128),
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(128),
    salary DECIMAL(10, 2),
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY fk_department (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (64) NOT NULL,
    last_name VARCHAR (64) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    Primary key (id),
    FOREIGN KEY fk_role (role_id) REFERENCES role(id),
    FOREIGN KEY  fk_manager (manager_id) REFERENCES employee(id)
);

INSERT INTO department (name)
VALUES ('Executive');

INSERT INTO role (title, salary, department_id) 
VALUES ('CEO', 80000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Bob', 'Slack', 1, 1);


INSERT INTO department (name) 
VALUES ('Executive');

INSERT INTO role (title, salary, department_id) 
VALUES ('CFO', 75000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Kate', 'Smith', 5, 13);

INSERT INTO department (name) 
VALUES ('IT');

INSERT INTO role (title, salary, department_id) 
VALUES ('IT', 75000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Chloe', 'OBrien', 6, 12);