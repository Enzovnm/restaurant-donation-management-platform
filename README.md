# Restaurant Donation Platform

A minimalist platform designed to manage restaurant donations.

<img width="1912" height="1102" alt="Image" src="https://github.com/user-attachments/assets/c7650b8e-4c7f-4076-a4e4-09f1290da83d" />

## Documentation
[Documentation](Documentation.pdf)

## Technologies Used

### Back-end
- **Java** – Main programming language.
- **Spring Boot** – Framework for API development and dependency management.
- **PostgreSQL** – Relational database used in the development environment.
- **H2 Database** – In-memory database for testing.
- **Lombok** – Library to reduce boilerplate (getters, setters, constructors, etc.).
- **MapStruct** – Library for simplifying mapping between objects (DTOs and entities).

### Front-end
- **TypeScript** – Language for static typing and increased code reliability.
- **React.js** – Framework for building the web interface.
- **Tailwind CSS** – Utility-first CSS library for responsive and minimalistic layouts.
- **Zustand** – Simple and performant global state management.
- **Zod** – Runtime data validation and typing.
- **React Hook Form** – Optimized library for managing forms.

### Infrastructure
- **Docker** – Containerization of the environment.

## Getting Started

### Cloning the repository
```bash
git clone https://github.com/Enzovnm/restaurant-donation-management-platform.git
```
### Front-end
```bash

cd restaurant-donation-management-platform/front-end/restaurant-donation-management-platform
npm install
npm run dev
```

### Back-end
```bash
cd restaurant-donation-management-platform/back-end/restaurant-donation-management-platform
docker compose up -d
```
