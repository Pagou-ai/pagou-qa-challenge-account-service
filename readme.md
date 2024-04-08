# Projeto Account service

## Requirements

- Node.js(v14+)
- npm
- Database (e.g., PostgreSQL)

## Installation

1. Clone the repository and install dependencies:

```bash
git clone git@github.com:Pagou-ai/account-service.git
cd account-service
```

2. Install dependencies
   
```bash
npm install
```

## Configuration

1. Copy the `.env.example` to a new file named `.env`:
```bash
 cp .env.example .env
```
2. Configure environment variables in the `.env` file as needed, including database settings.

## Database Migrations

Run migrations to create database tables:

```bash
  node ace migration:run
```

## Start the Project

Start the AdonisJS server:

```bash
node ace serve --watch
```

or

```bash
npm run dev
```

The server will be available at http://localhost:3333.

## Swagger Documentation

Swagger documentation can be accessed at:

http://localhost:3333/docs

Make sure the server is running before accessing the documentation.

