# Tech Challenge FIAP

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Customers](#customers)
  - [Products](#products)
- [Contributing](#contributing)
- [License](#license)

## Overview
Tech Challenge FIAP is a self-service system for a fast-food restaurant, designed to manage orders and payments through a digital interface. The backend is built using Node.js, Express, and MongoDB, following a Hexagonal Architecture.

## Features
- Create, read, update, and delete customers and products.
- MongoDB integration for data storage.
- Dockerized for easy deployment.

## Technologies
- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Docker**: Containerization platform.
- **Mongoose**: ODM for MongoDB.

## Getting Started

### Prerequisites
- Docker
- Docker Compose

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/JonissonGomes/tech-challenge-fiap.git
   cd tech-challenge-fiap
2. Create a .env file in the root directory and add the following variables:
   ```env
   MONGO_URI=mongodb://admin:admin@mongo:27017/techchallenge?authSource=admin
   PORT=3000

### Running the Application
1. Build and start the Docker containers:
   ```bash
   docker-compose up --build
2. The application will be running at http://localhost:3000.

## API Endpoints

### Customers
- **Create Customer**
  - **POST** `/api/customers`
  - Body: `{ "cpf": "12345678900", "name": "John Doe", "email": "john.doe@example.com" }`

- **Get All Customers**
  - **GET** `/api/customers`

- **Get Customer by ID**
  - **GET** `/api/customers/:id`

- **Get Customer by CPF**
  - **GET** `/api/customers/cpf/:cpf`

- **Update Customer**
  - **PUT** `/api/customers/:id`
  - Body: `{ "name": "John Updated", "email": "john.updated@example.com" }`

- **Delete Customer**
  - **DELETE** `/api/customers/:id`

### Products
- **Create Product**
  - **POST** `/api/products`
  - Body: `{ "name": "Burger", "category": "Food", "description": "Tasty burger", "price": 5.99, "imageUrl": "http://example.com/burger.jpg" }`

- **Get All Products**
  - **GET** `/api/products`

- **Get Product by ID**
  - **GET** `/api/products/:id`

- **Update Product**
  - **PUT** `/api/products/:id`
  - Body: `{ "name": "Burger", "category": "Food", "description": "Updated burger", "price": 6.99, "imageUrl": "http://example.com/burger.jpg" }`

- **Delete Product**
  - **DELETE** `/api/products/:id`

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
3. Commit your changes:
   ```bash
   git commit -am 'Add new feature'
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
5. Create a new Pull Request.

## License
This project is licensed under the MIT License.
