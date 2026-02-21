# Access Control System

A full-stack **Access Control System** built with **Spring Boot** (backend) and **React** (frontend). The system provides secure authentication, role-based authorization, and CRUD operations exposed via REST APIs with a clean UI to interact with them.

---

## Features

### Backend
- User registration and login
- JWT-based authentication
- Role-based access control (USER / ADMIN)
- Secure REST APIs
- CRUD operations on protected resources
- PostgreSQL database integration
- Centralized exception handling
- Swagger API documentation

### Frontend
- React-based UI
- User registration and login
- JWT token handling
- Protected routes
- Dashboard for authenticated users
- API interaction using Axios

---

## Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Java 17 | Core language |
| Spring Boot | Application framework |
| Spring Security | Authentication & authorization |
| JWT | Stateless token-based auth |
| PostgreSQL | Relational database |
| Maven | Build tool |

### Frontend
| Technology | Purpose |
|---|---|
| React (Vite) | UI framework |
| React Router | Client-side routing |
| Axios | HTTP client |
| JavaScript / HTML / CSS | Core web technologies |

---

## Project Structure

```
access-control/
├── Access-control/          # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   ├── pom.xml
│   └── ...
│
├── access-control-ui/       # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

---

## Backend Setup

### Prerequisites
- Java 17+
- Maven 3.8+
- PostgreSQL 14+

### Database Configuration

Create an `application.yml` file at the following path:

```
Access-control/src/main/resources/application.yml
```

An example configuration file `application.yml.example` is provided in the same directory for reference.

```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/your_database
    username: your_username
    password: your_password
  jpa:
    hibernate:
      ddl-auto: update

jwt:
  secret: your_jwt_secret_key
  expiration: 86400000
```

### Run the Backend

```bash
cd Access-control
mvn spring-boot:run
```

The backend will start at:

```
http://localhost:8080
```

### API Documentation (Swagger UI)

```
http://localhost:8080/swagger-ui/index.html
```

---

## Frontend Setup

### Prerequisites
- Node.js v18+
- npm

### Install Dependencies & Run

```bash
cd access-control-ui
npm install
npm start
```

The frontend will start at:

```
http://localhost:3000
```

---

## Authentication Flow

```
1. User submits registration form
         ↓
2. Backend creates user, assigns role, hashes password
         ↓
3. User logs in with credentials
         ↓
4. Backend validates and returns a signed JWT
         ↓
5. Frontend stores JWT and attaches it to requests:
   Authorization: Bearer <token>
         ↓
6. Protected APIs grant or deny access based on role
```

---

## Security Notes

- JWT-based **stateless** authentication — no server-side sessions
- Passwords are stored using **BCrypt hashing**
- Sensitive files (`application.yml`, `.env`) are excluded from version control via `.gitignore`
- Example configuration files are provided for local setup

---

## Scalability Considerations

- Stateless JWT architecture supports **horizontal scaling**
- Modular **service → controller → repository** layering for maintainability
- Easily extensible to a **microservices** architecture
- Ready for **Redis** caching and **Docker** containerization

---

## Running Tests

### Backend

```bash
cd Access-control
mvn test
```

### Frontend

```bash
cd access-control-ui
npm test
```

---



