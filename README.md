# Spring Boot TaskManager API

A **full CRUD REST API** built with **Spring Boot** connected to **MySQL**, with a **service layer**, **global error handling**, and **structured HTTP responses**. Perfect for learning or interview projects.

---

## Features

- Full CRUD for tasks:
  - Create a task (POST `/tasks`)
  - Read all tasks (GET `/tasks`)
  - Update a task (PUT `/tasks/{id}`)
  - Delete a task (DELETE `/tasks/{id}`)
- MySQL database integration (via XAMPP or local MySQL)
- Global exception handling with structured JSON responses
- Service layer separates business logic from controller
- Custom HTTP responses (e.g., `"Task added!"`)
- Easy to test via **Postman**

---

## Project Structure
src/main/java/com/example/
│
├── controller
│ └── TaskController.java
├── service
│ └── TaskService.java
├── repository
│ └── TaskRepository.java
├── model
│ └── Task.java
├── exception
│ ├── GlobalExceptionHandler.java
│ └── ErrorResponse.java
└── TaskmanagerApplication.java


---

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/KavinduLakmal2000/Task_Manager.git
cd Task_Manager

Make sure MySQL is running (e.g., via XAMPP) and create a database:

CREATE DATABASE taskdb;

Update src/main/resources/application.properties if needed:

spring.datasource.url=jdbc:mysql://localhost:3306/taskdb
spring.datasource.username=root
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect

Build and run the app:

mvn clean spring-boot:run

Test endpoints using Postman:

Create Task: POST http://localhost:8080/tasks

Get Tasks: GET http://localhost:8080/tasks

Update Task: PUT http://localhost:8080/tasks/{id}

Delete Task: DELETE http://localhost:8080/tasks/{id}

Example JSON Body
{
  "title": "Study Java",
  "description": "Prepare for interview",
  "status": "pending"
}

Example Error Response
{
  "timestamp": "2026-03-07T02:12:00.123",
  "status": 404,
  "error": "Task not found"
}

---
Tech Stack

Java 21

Spring Boot 3

Spring Data JPA

MySQL

Maven

Postman for API testing

Author

Your Name – GitHub

License

This project is open source and available under MIT License.

---

```bash