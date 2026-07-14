# Productify Backend

REST API for managing products with user authentication, built with Express, Drizzle ORM, and PostgreSQL.

## Tech Stack

- **Runtime**: Node.js + TypeScript
- **Framework**: Express 5
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL
- **Auth**: JWT (jsonwebtoken) + bcrypt
- **Validation**: express-validator
- **Package Manager**: pnpm

## Project Structure

```
src/
├── config/
│   ├── env.ts              # Environment variables
│   └── cors.ts             # CORS configuration
├── controllers/            # Business logic
│   ├── authController.ts   # Login / Register
│   ├── userController.ts   # User CRUD
│   ├── productController.ts# Product CRUD
│   └── commentController.ts# Comment CRUD
├── db/
│   ├── schema.ts           # Drizzle schema (users, products, comments)
│   ├── index.ts            # DB connection
│   └── queries.ts          # Custom queries
├── middleware/
│   ├── auth.ts             # JWT validation
│   └── validation.ts       # express-validator handler
├── routes/
│   ├── authRoutes.ts
│   ├── userRoutes.ts
│   ├── productRoutes.ts
│   └── commentRoutes.ts
├── utils/
│   ├── jwt.ts              # JWT helpers
│   ├── uuid.ts             # UUID generation
│   └── auth.ts             # Password hashing
└── index.ts                # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- PostgreSQL

### Installation

```bash
pnpm install
```

### Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.examples .env
```

Required variables:

| Variable | Description |
|---|---|
| `PORT` | Server port |
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Secret for JWT signing |
| `JWT_EXPIRE` | JWT expiration time |
| `BYCRYPT_SALT` | bcrypt salt rounds |
| `FRONTEND_URL` | Allowed CORS origin |

### Database Setup

Push the schema to PostgreSQL:

```bash
pnpm db:push
```

### Development

```bash
pnpm dev
```

Server runs on `http://localhost:3000`.

### Production

```bash
pnpm build
pnpm start
```

## API Endpoints

### Auth

| Method | Endpoint | Body | Auth |
|---|---|---|---|
| POST | `/auth/register` | `{ name, email, password }` | No |
| POST | `/auth/login` | `{ email, password }` | No |

### Users

| Method | Endpoint | Auth |
|---|---|---|
| GET | `/api/users/my` | Yes |

### Products

| Method | Endpoint | Body | Auth |
|---|---|---|---|
| GET | `/api/products` | — | No |
| GET | `/api/products/my` | — | Yes |
| GET | `/api/products/:id` | — | No |
| POST | `/api/products` | `{ title, description, imageUrl }` | Yes |
| PUT | `/api/products/:id` | `{ title, description, imageUrl }` | Yes |
| DELETE | `/api/products/:id` | — | Yes |

### Comments

| Method | Endpoint | Body | Auth |
|---|---|---|---|
| POST | `/api/comments/:productId` | `{ content }` | Yes |
| DELETE | `/api/comments/:commentId` | — | Yes |

## Data Model

```
users 1───* products 1───* comments
users 1───* comments
```

- **users**: id (UUID), email, name, passwordHash, role, isActive, imageUrl
- **products**: id (UUID), title, description, imageUrl, userID (FK)
- **comments**: id (UUID), content, userID (FK), productID (FK)

## Author

Alejandro Guzman Rodriguez
