![NestJS](https://img.shields.io/badge/NestJS-11-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-blue)
![TypeORM](https://img.shields.io/badge/TypeORM-0.3-orange)

# 📚 BookVault

A production-style Library Management Backend built with **NestJS**, **TypeScript**, **PostgreSQL**, and **TypeORM**.

This project is being developed as a learning journey to understand how modern backend systems are designed and implemented using industry best practices.

---

## 🎯 Project Goal

BookVault is more than a CRUD application.

The objective is to learn:

- Backend Architecture
- REST API Design
- NestJS Fundamentals
- PostgreSQL Database Design
- TypeORM
- Entity Relationships
- Validation
- Logging
- Exception Handling
- Authentication & Authorization
- Docker
- Testing
- Production Best Practices

The project is built incrementally, following the same design principles used in production backend applications.

---

# 🏗️ Architecture

```text
                Client
                   │
              HTTP Request
                   │
                   ▼
             Controller Layer
                   │
                   ▼
             Service Layer
           (Business Logic)
                   │
                   ▼
            Repository Layer
                   │
                   ▼
              PostgreSQL
```

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| NestJS | Backend Framework |
| TypeScript | Programming Language |
| PostgreSQL | Relational Database |
| TypeORM | ORM |
| class-validator | Request Validation |
| class-transformer | DTO Transformation |

---

# 📂 Project Structure

```text
src
│
├── books
├── authors
├── categories
├── common
├── config
├── database
├── entities
└── app.module.ts
```

---

# 📚 Current Features

- PostgreSQL Integration
- TypeORM Configuration
- Book Entity
- Author Entity
- Category Entity
- Entity Relationships
- Create Book API (In Progress)

---

# 🚀 Roadmap

## Phase 1
- [x] Project Setup
- [x] PostgreSQL Configuration
- [x] TypeORM Configuration
- [x] Entity Design
- [x] GitHub Repository

## Phase 2
- [ ] Book CRUD
- [ ] Author CRUD
- [ ] Category CRUD

## Phase 3
- [ ] Entity Relationships
- [ ] Pagination
- [ ] Search
- [ ] Filtering

## Phase 4
- [ ] Authentication
- [ ] Authorization
- [ ] JWT

## Phase 5
- [ ] Swagger Documentation
- [ ] Logging
- [ ] Docker
- [ ] Unit Testing
- [ ] Integration Testing

---

# ⚙️ Installation

Clone the repository

```bash
git clone git@github.com:<your-username>/book-vault.git
```

Install dependencies

```bash
npm install
```

Configure environment variables

```env
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
```

Run the application

```bash
npm run start:dev
```

---

# 🗄️ Database

Database: PostgreSQL

Current Entities:

- Book
- Author
- Category

---

# 📖 Learning Notes

This repository is intentionally built step by step to understand the reasoning behind every architectural decision instead of relying on code generators.

Each feature is implemented following production-oriented backend design principles.

---

# 🤝 Contributing

This project is currently a personal learning project.

Suggestions and feedback are always welcome.

---

# 📄 License

MIT
