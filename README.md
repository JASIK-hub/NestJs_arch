# 🚀 

Этот проект — тест для разработки REST API на **NestJS** с использованием **TypeORM** и **PostgreSQL**, со встроенной документацией через **Swagger** и контейнеризацией через **Docker Compose**.

---

## 📦 Стек технологий
- **[NestJS](https://nestjs.com/)** — backend-фреймворк  
- **[TypeORM](https://typeorm.io/)** — ORM для PostgreSQL  
- **[PostgreSQL](https://www.postgresql.org/)** — база данных  
- **[Swagger](https://swagger.io/)** — авто-документация API  
- **[Docker](https://www.docker.com/)** — контейнеризация  
- **[Docker Compose](https://docs.docker.com/compose/)** — оркестрация  

---

### Требования:

- Node.js
- PostgreSQL 
- Docker , Docker Compose 

## ⚙️ Установка и запуск

### 1. Клонирование репозитория:

```bash
git clone <repository-url>
cd nestjs_project
```
### 2. Установка зависимостей:

```bash
yarn install
```
### 3. Запуск с Docker:

```bash
docker-compose up -d
```

## 📚 API Документация

API документация доступна через Swagger UI:

- **Swagger**: `http://localhost:3000/docs`

Документация автоматически генерируется в коде.

## 🐳 Docker

### Порты:

- `3000` - NestJS приложение
- `5432` - PostgreSQL
